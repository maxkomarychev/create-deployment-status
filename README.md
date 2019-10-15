# Create deployment status

Create deployment status

# Usage


```yaml
- uses: maxkomarychev/create-deployment-status@v0.1.5
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    deployment_id: ${{ github.ref }}
    state: success
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```
