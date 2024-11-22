'use client'
import { X } from 'lucide-react';
import React from 'react'

function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) {
      form.reset()
    }
  }
  return (
    <button className='search-btn text-white' type="reset" onClick={() => reset()}>
      <X/>
    </button>
  )
}

export default SearchFormReset