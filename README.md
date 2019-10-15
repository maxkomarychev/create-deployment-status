# Create deployment status

Create deployment status

# Usage


```yaml
- uses: maxkomarychev/create-deployment-status@0.1.1
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    deployment_id: ${{ github.event.pull_request.head.ref }}
    state: success
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```
