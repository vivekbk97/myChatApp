import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    isAuthenticated && (
      <div className='profile'>
        <img src={user.picture} alt={user.name} />
        <h3 className='name'>{user.name.toUpperCase()}</h3>
      </div>
    )
  )
}

export default Profile
