<template>
  <div>
    <div
      style="
        display: flex;
        height: 50px;
        background-color: #f9f9f9;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
      "
    >
      <n-date-picker
        @update-value="onDateUpdate"
        type="date"
        :value="date"
        clearable
      ></n-date-picker>
      <n-pagination
        :item-count="100"
        :page-size="10"
        @update-page="onPageUpdate"
        :page="page"
      ></n-pagination>
    </div>
  </div>

  <div
    style="background-color: white; padding: 20px"
    v-masonry
    item-selector=".item"
    column-width=".item"
    gutter="10"
  >
    <div
      v-masonry-tile
      class="item"
      style="margin-bottom: 10px"
      v-for="item in data?.contents"
      :key="item.illust_id"
    >
      <RankingItemCard :i="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RankingItemCard from '@/components/RankingItemCard.vue'
import { useQuery } from '@tanstack/vue-query'
import { useLoadingBar, NPagination, NDatePicker } from 'naive-ui'
import { computed } from 'vue'
import dayjs from 'dayjs'
import { getRanking } from '@/api'
import router from '../router'

const props = defineProps<{
  mode: string
  page?: string
  date?: string
}>()
const page = computed(() => (props.page ? parseInt(props.page) : 1))
const date = computed(() => (props.date ? parseInt(props.date) : null))

const loadingBar = useLoadingBar()

const { data } = useQuery({
  queryKey: ['ranking', () => props.mode, page, date],
  queryFn: async () => {
    loadingBar.start()
    let dateStr = undefined
    if (date.value) {
      dateStr = dayjs(date.value).format('YYYYMMDD')
    }
    try {
      const data = await getRanking(props.mode, page.value, dateStr)
      loadingBar.finish()
      return data
    } catch (e) {
      loadingBar.error()
      throw e
    }
  },
  staleTime: 1000 * 60 * 60,
})

function onPageUpdate(page: number) {
  router.push({ query: { page, date: props.date } })
}

function onDateUpdate(date: number | null) {
  router.push({ query: { date: date || undefined, page: props.page } })
}
</script>
