import { shallowMount } from '@vue/test-utils'
import fab from '@/modules/daybook/components/f-a-b'


describe('Pruebas en el f-a-b component', () => {
    
    test('Debe de mostrar el icono por defecto', () => {
        // fa-plus
        const wrapper = shallowMount(fab)
        const iTag = wrapper.find('i')
        expect(iTag.classes('fa-plus')).toBeTruthy()
    })

    test('Debe de mostrar el icono por argumento: fa-circle', () => {
        // fa-circle
        const wrapper = shallowMount(fab, {
            props: {
                icon: 'fa-circle'
            },
        })
        const iTag = wrapper.find('i')
        expect(iTag.classes('fa-circle')).toBeTruthy()
    })

    test('Debe de emitir el evento on:click cuando se hace click', () => {
        // wrapper.emitted('on:click')
        const wrapper = shallowMount(fab)
        const btn = wrapper.find('button')
        btn.trigger('click')
        console.log(wrapper.emitted())
        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })

})
