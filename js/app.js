import '../css/app.scss'

import 'bootstrap'
import '@popperjs/core'
import $ from 'jquery'
import Josh from 'joshjs'

let dates = require('./dates')

new Josh()

$(function () {
  $('.custom-upload-input').on('change', function () {
    let fileName = $(this).val().split('\\').pop()
    $(this)
      .siblings('.custom-upload-label')
      .removeClass('not-selected')
      .addClass('selected')
      .html("Selected File: <div class='file-name'>" + fileName + '</div>')
  })
})

document.querySelectorAll('.date-time').forEach((d) => {
  d.innerHTML = dates.formatDateTime(d.innerHTML)
})
