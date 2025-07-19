<template>
  <NMessageProvider>
    <NLoadingBarProvider>
      <header>
        <RouterLink to="/p/daily">YAPR</RouterLink>
        <nav>
          <RouterLink to="/p/daily">Daily</RouterLink>
          <RouterLink to="/p/weekly">Weekly</RouterLink>
          <RouterLink to="/p/monthly">Monthly</RouterLink>
          <RouterLink to="/p/rookie">Rookie</RouterLink>
        </nav>
        <OuterLink href="https://www.pixiv.net/ranking.php">Go To Pixiv</OuterLink>
      </header>
      <main>
        <RouterView />
      </main>
      <footer></footer>
    </NLoadingBarProvider>
  </NMessageProvider>
</template>

<style scoped lang="css">
header {
  color: #778087;
  text-decoration: none;
  margin: auto;
  width: 100%;
  max-width: 1200px;
  min-width: 600px;
  flex-shrink: 0;
  height: 48px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  flex: 1;
  background-color: #e2e2e2;
}

footer {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #ccc;
  background-color: white;
  flex-shrink: 0;
}
</style>

<script setup lang="ts">
import { NLoadingBarProvider, NMessageProvider } from 'naive-ui'
import OuterLink from '@/components/OuterLink.vue'
</script>
