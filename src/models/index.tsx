export interface iPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface iComments {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
