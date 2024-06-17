import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SearchBox() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [isEmpty, setIsEmpty] = useState(false) // State for empty search message

  const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedQuery = query.trim()
    if (trimmedQuery) {
      setIsEmpty(false) // Reset empty message state on valid search
      navigate(`/search?query=${trimmedQuery}`)
    } else {
      setIsEmpty(true) // Set empty message state on empty search
    }
  }

  return (
    <Form className="flex-grow-1 d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          placeholder="Search Website"
          aria-label="Search Website"
          aria-describedby="button-search"
          onChange={(e) => setQuery(e.target.value)}
          value={query} // Controlled component approach
        />
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
      {isEmpty && ( // Conditionally render message for empty search
        <p className="text-danger mt-2">Please enter something to search.</p>
      )}
    </Form>
  )
}
