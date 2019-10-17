# Create deployment status

Create deployment status

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-repos-create-deployment-status

# Quick start

```yaml
- uses: maxkomarychev/create-deployment-status@v0.5.1
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    deployment_id: ${{ steps.create_deployment.outputs.id }}
    state: success
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|A token to perform API calls
|deployment_id|true|deployment id
|state|true|The state of the status. Can be one of error, failure, inactive, in_progress, queued pending, or success.
|log_url|false|The full URL of the deployment's output.
|description|false|A short description of the status. The maximum description length is 140 characters.
|environment|false|Name for the target deployment environment, which can be changed when setting a deploy status. For example, production, staging, or qa.
|environment_url|false|Sets the URL for accessing your environment.
|auto_inactive||Adds a new inactive status to all prior non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. An inactive status is only added to deployments that had a success state

# Outputs

| Name | Description |
|---|---|
|id|Id of created deployment status

