# Create deployment status

Create deployment status

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-repos-create-deployment-status

# Usage

```yaml
- uses: maxkomarychev/create-deployment-status@v0.4.0
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    deployment_id: ${{ steps.create_deployment.outputs.id }}
    state: success
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```
