# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
#

duration = 300

window.addEventListener 'scroll', (->
  if window.scrollY > 20
    $('.navbar').fadeOut(duration)
  else
    $('.navbar').fadeIn(duration)
  return
), false

# $ ->
#   if $('.alert').length
#     $('.alert').delay(2000).fadeOut(duration)
#   return
