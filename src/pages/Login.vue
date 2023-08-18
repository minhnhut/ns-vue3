<script lang="ts" setup>
import {
    $navigateTo,
    ref
} from 'nativescript-vue'

import Home from '@/pages/Home.vue'

const driverId = ref('')

</script>


<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Home" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="*, auto, auto, auto, *" class="px-4">
        <Label
          row="1"
          class="text-xl align-middle text-center text-gray-500"
          text="Enter driver ID"
        />

        <TextField row="2" hint="Enter text..." v-model="driverId" />

        <Button
          row="3"
          @tap="$navigateTo(Home, { props: { driverId } })"
          class="mt-4 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg"
          horizontalAlignment="center"
        >
          Enter ID
        </Button>
      </GridLayout>
    </Page>
  </Frame>
</template>