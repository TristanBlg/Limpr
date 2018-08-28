import * as React from 'react'
import Post from '../components/Post'

function News(){
  return (
    <section>
      <div className="container">
        {posts.map((post, key) => {
          return (
            <Post key={key} {...post}/>
          )
        })}
      </div>
    </section>
  )
}

export default News

//TO DELETE
const posts = [
  {
    id: 0,
    dateSend: '2018-08-21 22:55',
    authorId: 0,
    songsId: [
      0
    ]
  },
  {
    id: 1,
    dateSend: '2018-08-21 20:21',
    authorId: 0,
    songsId: [
      1
    ]
  },
  {
    id: 2,
    dateSend: '2018-08-19 21:34',
    authorId: 1,
    songsId: [
      2
    ]
  },
]
