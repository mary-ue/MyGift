const swiperThumb = new Swiper('.gift__swiper--thumb', {
  spaceBetween: 12,
  slidesPerView: 'auto', // swiper не будет рассчитывать width слайдов
  freeMode: true,
  breakpoints: {
    320: {
      spaceBetween: 12,
    },
    1141: {
      spaceBetween: 16,
    },
  },
});

const swiperMain = new Swiper('.gift__swiper--card', {
  spaceBetween: 16,
  thumbs: {
    swiper: swiperThumb,
  },
});

// imask
const phoneInputs = document.querySelectorAll('.form__field--phone');

for (let i = 0; i < phoneInputs.length; i++) {
  const element = phoneInputs[i];
  IMask(element,
    {
      mask: '+{7}(000)000-00-00',
    });
}

// validate 
const form = document.querySelector('.form');
const submitButton = form.querySelector('.form__button');

const updateSubmitButton = () => {
  let isFormFilled = true;

  for (const field of form.elements) {
    if (field.classList.contains('form__field')) {
      if (!field.value.trim()) {
        isFormFilled = false;
        break;
      }
    }
  }

  submitButton.disabled = !isFormFilled;
}

const phoneValidateOption = {
  presence: {
    message: 'Поле телефон обязательно для заполнения',
  }, 
  format: {
    pattern: '\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}',
    message: 'Номер телефона должен соответствовать формату: +7(XXX)XXX-XX-XX',
  }
}

form.addEventListener('input', updateSubmitButton);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const errors = validate(form, {
    sender_phone: phoneValidateOption,
    receiver_phone: phoneValidateOption,
  });

  if (errors) {
    for (const key in errors) {
      const errorString = errors[key];
      alert(errorString);
    }
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

});
