<template>
  <v-app style="margin: 0px">
    <sidebar-menu :menu="menu" />
    <v-content>
      <v-container id="container">
        <HelloWorld/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import { SidebarMenu } from 'vue-sidebar-menu'


export default {
  name: 'App',

  components: {
    HelloWorld,
    // eslint-disable-next-line vue/no-unused-components
    SidebarMenu,
  },

  data: () => ({
    menu: [
            {
                header: true,
                title: 'MENU',
                hiddenOnCollapse: true
            },
            {
                href: '/',
                title: 'Friends',
                icon: 'fa fa-user'
            },
            {
                href: '/',
                title: 'My Places',
                icon: 'fa fa-chart-area',
                child: [
                    {
                        href: '/',
                        title: 'child'
                    }
                ]
            }
          ]
  }),
};
</script>