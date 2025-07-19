<template>
  <div style="width: 240px">
    <n-card bordered hoverable>
      <template #cover>
        <div style="position: relative">
          <OuterLink :href="`https://www.pixiv.net/en/artworks/${i.illust_id}`">
            <n-image preview-disabled lazy :src="thumbnailUrl"></n-image>
          </OuterLink>
          <div
            style="
              position: absolute;
              bottom: 10px;
              left: 10px;
              color: white;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 3px;
            "
          >
            <n-icon size="12px">
              <Eye></Eye>
            </n-icon>
            <span>{{ i.view_count }}</span>
          </div>
          <div
            style="
              position: absolute;
              bottom: 10px;
              right: 10px;
              color: white;
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 3px;
            "
          >
            <n-icon size="12px">
              <ThumbsUp></ThumbsUp>
            </n-icon>
            <span>{{ i.rating_count }}</span>
          </div>
        </div>
      </template>

      <template #header>
        <n-ellipsis>
          {{ i.title }}
        </n-ellipsis>
      </template>

      <template #header-extra> #{{ i.rank }} </template>

      <div>
        <n-tag v-for="t in i.tags" :key="t" type="info" size="tiny" round>
          <OuterLink :href="`https://www.pixiv.net/en/tags/${t}/artworks`"> {{ t }} </OuterLink>
        </n-tag>
      </div>

      <template #footer>
        <div style="display: flex; gap: 5px; align-items: center">
          <OuterLink :href="userUrl">
            <n-avatar size="small" :src="profileImg"></n-avatar>
          </OuterLink>
          <div style="display: flex; flex-direction: column; font-size: 10px">
            <OuterLink style="text-decoration: none; color: #778087" :href="userUrl">
              {{ i.user_name }} · {{ uploadTime }}
            </OuterLink>
            <span style="color: #778087">{{ i.width }} * {{ i.height }}</span>
          </div>
        </div>
      </template>
    </n-card>
  </div>
</template>

<style scoped lang="css">
a {
  color: var(--n-text-color);
}
</style>

<script setup lang="ts">
import { NCard, NImage, NTag, NEllipsis, NAvatar, NIcon } from 'naive-ui'
import { Eye, ThumbsUp } from '@vicons/ionicons5'
import OuterLink from './OuterLink.vue'
import dayjs from 'dayjs'
import type { RankingContent } from '@/api'

const { i } = defineProps<{ i: RankingContent }>()

const userUrl = `https://www.pixiv.net/en/users/${i.user_id}`
const uploadTime = dayjs.unix(i.illust_upload_timestamp).format('MM-DD')
const thumbnailUrl = i.url.replace('i.pximg.net', 'i.yuki.sh')
const profileImg = i.profile_img.replace('i.pximg.net', 'i.yuki.sh')
</script>
