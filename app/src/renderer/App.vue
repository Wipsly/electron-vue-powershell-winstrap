<template>
  <div id="app">
    <h1>Welcome</h1>
  </div>
</template>

<script>
  import shell from 'node-powershell'

  export default {
    mounted() {
      // Create the PS Instance
      let ps = new shell({
        executionPolicy: 'Bypass',
        noProfile: true
      })

      // Load the gun
      ps.addCommand("Get-Process")

      // Pull the Trigger
      ps.invoke()
        .then(output => {
          console.log(output)
      })
        .catch(err => {
          console.error(err)
          ps.dispose()
      })
    }
  }
</script>

