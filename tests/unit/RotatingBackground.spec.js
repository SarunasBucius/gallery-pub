import { shallowMount } from '@vue/test-utils'
import RotatingBackground from '@/components/RotatingBackground.vue'

describe('getImagesGroupIdForMedia', () => {
  it('return images group id for provided media', () => {
    const wrapper = shallowMount(RotatingBackground, {
      methods: {
        fetchImagesDoc: jest.fn()
      }
    })
    let expected = 'main-group-id'
    let docParam = {
      'main-group-id': {
        name: 'main',
        photos: []
      },
      'phone-group-id': {
        name: 'phone',
        photos: []
      }
    }

    let res = wrapper.vm.getImagesGroupIdForMedia(docParam, 'main')
    expect(res).toBe(expected)
  })
})

// describe('loadImg', () => {
//   it('runs number of times equal to passed array length', done => {
//     const wrapper = shallowMount(RotatingBackground, {
//       methods: {
//         fetchImagesDoc: jest.fn(),
//         // loadImg
//       }
//     })
//     const somethingSpy = jest.spyOn(wrapper.vm, 'loadImg')
//     let images = [
//       {
//         url: 'https://firebasestorage.googleapis.com/v0/b/personal-page-49cbf.appspot.com/o/public%2Fbackground%2Fminified%2F1k5ry7oc0ruduo.jpg?alt=media&token=e677cd88-e158-419d-9c0b-42aa7a18c9b6'
//       },
//       {
//         url: 'url2'
//       },
//       {
//         url: 'url3'
//       }
//     ]
//     let expected = images.length
//     wrapper.vm.loadImg(images, (err, result) => {
//       expect(result).toEqual(true);
//       done(err);
//     })
//     expect(somethingSpy).toHaveBeenCalledTimes(expected)

//     // implement test
//   })
//   it('appends loaded URLs to loadedImages', () => {
//     // implement test
//   })
//   it('triggers start rotating once', () => {
//     // implement test
//   })
//   it('loads correct images', () => {
//     // implement test, loadedImages should contain all urls
//     // from Object passed as params
//   })
// })
