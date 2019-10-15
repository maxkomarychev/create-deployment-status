const core = require("@actions/core");
const github = require("@actions/github");

function parse_array(input_name) {
  const input_value = core.getInput(input_name)
  if (input_value === "") {
    return undefined; 
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

try {
  const token = core.getInput("token")
  const deployment_id = core.getInput("deployment_id")
  const state = core.getInput("state")
  const client = new github.GitHub(token);
  const context = github.context;
  client.repos.createDeploymentStatus({
    ...context.repo,
      token,
      deployment_id,
      state,
  }).then(response => {
    console.log('response', response)
    core.setOutput("id", response.data.id)
  })
  .catch(error => {
    console.log("error 1", error);
    core.setFailed(error.message);
  });
} catch (error) {
  console.log("error 2", error);
  core.setFailed(error.message);
}
