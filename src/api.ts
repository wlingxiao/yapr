export type RankingResult = {
  mode: string
  contents: RankingContent[]
}

export type RankingContent = {
  illust_id: number
  title: string
  url: string
  width: number
  height: number
  tags: string[]
  rank: number
  mask_reason: string | undefined
  user_name: string
  profile_img: string
  view_count: number
  illust_upload_timestamp: number
  date: string
  user_id: number
  rating_count: number
}

export async function getRanking(mode: string, p?: number, date?: string): Promise<RankingResult> {
  let url = `/api/ranking.php?format=json&content=illust&mode=${mode}`
  if (p) {
    url += `&p=${p}`
  }
  if (date) {
    url += `&date=${date}`
  }
  const resp = await fetch(url)
  return await resp.json()
}
