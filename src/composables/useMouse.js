import { ref } from 'vue';
import useEventListener from './events/useEventListener';

export default function useMouse(){
    const x = ref(0)
    const y = ref(0)
    
    function update(event){
        x.value = event.pageX
        y.value = event.pageY
    }
    
    useEventListener('mousemove', update)
    
    return {x, y}
}