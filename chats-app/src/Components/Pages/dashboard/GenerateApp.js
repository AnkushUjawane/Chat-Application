import React,{Suspense, lazy} from 'react'

const Cat = lazy(()=> import("../../Components/Cat"))

const GenerateApp = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Cat />
      </Suspense>
    </div>
  )
}

export default GenerateApp
