/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom'

class Navigator {
  private navigate: any

  constructor() {
    this.navigate = useNavigate()
  }

  navigateTo(route: string) {
    this.navigate(route)
  }
}

export default Navigator
