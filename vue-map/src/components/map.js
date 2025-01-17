import googleMapsApiLoader from '@/js/googleMapsApiLoader'

export default (key) => {
    return {
        render (h) {
            const el = 'div'
            const options = { ref: 'map'}

            if (this.google && this.map && Object.keys(this.$scopedSlots).length) {
                const scopedSlot = this.$scopedSlots.default({
                    google: this.google,
                    map: this.map
                })
                return h(el, options, [scopedSlot])
            }

            return h(el, options)
        },
        data () {
        return {
            google: null,
            map: null
        }
        },
        mounted () {
            googleMapsApiLoader(key)
            .then((google) => {
                this.google = google
                this.drawMap()
            })
        },
        methods: {
            drawMap () {
                const el = this.$refs.map
                const map = new this.google.maps.Map(el, {
                    center: {
                    lat: 37,
                    lng: 127
                    },
                    zoom: 14
                })
            this.map = map
            }
        }
    }
}