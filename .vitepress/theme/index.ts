import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import "../style/layout.scss"

export default {
  extends: DefaultTheme,
  Layout: () => {

    const props: Record<string, any> = {}
    const { frontmatter } = useData()
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
  
    return h(DefaultTheme.Layout, props)
  }
}

