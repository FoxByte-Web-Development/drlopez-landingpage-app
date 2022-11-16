import React from 'react'
import Button from './Button/button-componet'
export default function Test() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world with tailwind!{' '}
      </h1>
      <Button>Button fill</Button>
      <Button variant="secondary">Button with border</Button>
    </div>
  )
}
