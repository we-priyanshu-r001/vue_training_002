import { onMounted, onUnmounted } from "vue"

export default function useEventListener(event, callback){

    onMounted(() => window.addEventListener(event, callback))
    onUnmounted(() => window.removeEventListener(event, callback))

}