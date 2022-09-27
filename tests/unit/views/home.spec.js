import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView'

describe('Pruebas en el Home View', () => {
    // let wrapper

    // beforeEach(() => {
    //     wrapper = shallowMount(AboutView)
    // })

    test('Debe renderizar el componente correctamente', () => {
        const wrapper = shallowMount(HomeView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Hacer click en un boton debe de redireccionar a no-entry', () => {
        const mockRouter = {
            push: jest.fn()
        }
        const wrapper = shallowMount(HomeView, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })
        wrapper.find('button').trigger('click')
        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'})
    })
    
})
