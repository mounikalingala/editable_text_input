import {useState} from 'react'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')

  const onChangeName = event => {
    setName(event.target.value)
  }

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState({name: '', comment: ''})

  const commentDetails = {
    name,
    comment,
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onClickComment = event => {
    event.preventDefault()
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          value={comment}
          onChange={onChangeComment}
          rows="6"
        />
        <CommentButton type="submit" onClick={onClickComment}>
          Comment
        </CommentButton>
      </Form>
      <CommentItem commentDetails={commentDetails} />
    </CommentsContainer>
  )
}

export default Comments
