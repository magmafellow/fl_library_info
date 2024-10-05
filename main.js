console.log('__x')

const menuTrigger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const burger1 = document.querySelector('.burger__one')
const burger2 = document.querySelector('.burger__two')
const burger3 = document.querySelector('.burger__three')
let toOpen = true

const onMenuClickHandler = () => {
  if (toOpen) {
    document.documentElement.style.overflowY = 'hidden'
  } else if (!toOpen) {
    document.documentElement.style.overflowY = 'auto'
  }
  burger1.classList.add('goLeftSmallAndBack')
  burger2.classList.add('goLeftManyAndBack')
  burger3.classList.add('goLeftMediumAndBack')

  setTimeout(() => {
    burger1.classList.remove('goLeftSmallAndBack')
    burger2.classList.remove('goLeftManyAndBack')
    burger3.classList.remove('goLeftMediumAndBack')  }, 500)
  mobileMenu.classList.toggle('active')
  toOpen = !toOpen
}

menuTrigger.addEventListener('click', onMenuClickHandler)
