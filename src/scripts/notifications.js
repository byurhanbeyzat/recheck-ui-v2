const alertOpenButtons = selectElements('.alert-btn')
const alertCloseButtons = selectElements('.alert [aria-label="alert-close"]')

const alerts = selectElements('.alert')

// to show our alerts
alertOpenButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // alert.notify(e.target.dataset.type, `Lorem ipsum dolor sit amet..`)
    const currentAlert = selectElement(`.alert.alert-${e.target.dataset.type}`)
    showAlert(currentAlert)
  })
})

// to close our alerts
alertCloseButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const active = activeAlert()
    closeAlert(active)
  })
})

function activeAlert() {
  let active = null
  alerts.forEach((alert) => {
    if (alert.classList.contains('is-active')) {
      active = alert
    }
  })
  return active
}

function showAlert(element) {
  element.classList.toggle('is-active')

  setTimeout(() => closeAlert(element), 2500)
}

function closeAlert(element) {
  element.classList.contains('is-active')
    ? element.classList.remove('is-active')
    : ''
}
