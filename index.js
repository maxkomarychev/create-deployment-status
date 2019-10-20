const core = require("@actions/core");
const github = require("@actions/github");

core.warning("This action is deprecated in favor of https://github.com/maxkomarychev/oction-create-deployment-status")

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

function parse_boolean(input_name) {
  const input_value = core.getInput(input_name)
  return input_value === "true"
}

function default_parse(input_name) {
  const input_value = core.getInput(input_name)
  return input_value || undefined
}

try {
  const token = default_parse("token");
  const deployment_id = default_parse("deployment_id");
  const state = default_parse("state");
  const log_url = default_parse("log_url");
  const description = default_parse("description");
  const environment = default_parse("environment");
  const environment_url = default_parse("environment_url");
  const auto_inactive = parse_boolean("auto_inactive");
  const client = new github.GitHub(token);
  const context = github.context;
  client.repos.createDeploymentStatus({
    ...context.repo,
      token,
      deployment_id,
      state,
      log_url,
      description,
      environment,
      environment_url,
      auto_inactive,
    headers: {
      "Accept": "application/vnd.github.flash-preview+json, application/vnd.github.ant-man-preview+json",
    }
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
