import { ThemeProvider } from "styled-components"
import theme from "../../themes/pathfinder"
import Book from "../../components/Book"
import Page from "../../components/Page"

import Section1 from "./chapters/chapter1/section1"

export default function VamprieTheMasquerade(){
  return(
    <ThemeProvider theme={theme}>
      <Book>
        <Page>
          <Section1 />
        </Page>
      </Book>
    </ThemeProvider>
  )
}