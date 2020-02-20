import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FindReview from './FindReview'
import NewReview from './NewReview'
import Finder from './Finder'

const Review = () => {
  return (
    <div>
      <Finder />
      <Switch>
        <Route exact path='/review' component={FindReview} />
        {/* <Route path='/review/:pendingReview' component={PendingReview} /> */}
        <Route path='/review/:newReview' component={NewReview} />
      </Switch>
    </div>
  )
}

export default Review;