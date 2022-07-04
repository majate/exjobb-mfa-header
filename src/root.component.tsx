import { CssBaseline } from '@mui/material'
import { AppProps } from 'single-spa'
import Header, { HeaderProps } from './Header'

export default function Root(props: HeaderProps & AppProps) {
  return (
    <>
      <CssBaseline />
      <Header title={props.title} titlePath={props.titlePath} menuItems={props.menuItems} />
    </>
  )
}
