import googleMapFactory from '@/components/map'
// import googleMapMarker from '@/components/marker'
// import { component } from 'vue/types/umd'

function install (Vue, options) {
    const { apiKey } = options

    const googleMap = googleMapFactory(apiKey)

    // const components = {
    //     googleMap,
    //     googleMapMarker
    // }

    // Object.defineProperties(components).forEach(([componentName, component]) => {
    // Vue.component(componentName, component)
    // })

    Vue.component('googleMap', googleMap)
}

export default install