// OPEN NAVBAR LIST
// var navbarProductHeading = document.querySelector('.navbar__product-heading');
var navbarOpenBar = document.querySelectorAll('.navbar__open-bar');
navbarOpenBar.forEach((a)=>{
    a.addEventListener('click',()=>{
    a.classList.toggle('active');
    if(a.firstElementChild.firstElementChild.classList.contains('fa-chevron-down'))
        a.firstElementChild.firstElementChild.classList.replace('fa-chevron-down','fa-chevron-up');
    else
    a.firstElementChild.firstElementChild.classList.replace('fa-chevron-up','fa-chevron-down');
});
})

// CALENDER
let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}    

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}    

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (month > 11 || month < 0) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {            
                day.classList.add('curr-date')
            }    
        }    
        calendar_days.appendChild(day)
    }    
}    

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }    
    month_list.appendChild(month)
})    

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}    

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}    

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}    







//HOMEPAGE MARKETING MENU SWITCH
var marketingCodeVoucher = document.querySelector('.homepage__marketing__menu-voucher');
var marketingCalender = document.querySelector('.homepage__marketing__menu-calender');
marketingCodeVoucher.addEventListener('click',()=>{
    marketingCodeVoucher.classList.add('active');
    marketingCalender.classList.remove('active');
    document.querySelector('.homepage__marketing__calender').classList.remove('active');
    document.querySelector('.homepage__marketing__voucher-code').classList.add('active');
})
marketingCalender.addEventListener('click',()=>{
    marketingCalender.classList.add('active');
    marketingCodeVoucher.classList.remove('active');
    document.querySelector('.homepage__marketing__calender').classList.add('active');
    document.querySelector('.homepage__marketing__voucher-code').classList.remove('active');
})
//HOMEPAGE OPERATIONAL EFFICIENCY SWITCH
var OE = document.querySelectorAll('.homepage__operational-efficiency__menu-item');
var OE2
var OE3
OE.forEach((a,index)=>{
    a.addEventListener('click',()=>{
        if(index==0){
            OE.forEach((b)=>{
                b.classList.remove('active');
            })
            document.querySelector('.homepage__operational-efficiency__table.a').classList.add('active');
            document.querySelector('.homepage__operational-efficiency__table.b').classList.remove('active');
            document.querySelector('.homepage__operational-efficiency__table.c').classList.remove('active');
            a.classList.add('active');
        }
        else if(index==1){
            OE.forEach((b)=>{
                b.classList.remove('active');
            })
            document.querySelector('.homepage__operational-efficiency__table.b').classList.add('active');
            document.querySelector('.homepage__operational-efficiency__table.a').classList.remove('active');
            document.querySelector('.homepage__operational-efficiency__table.c').classList.remove('active');
            a.classList.add('active');
        }
        else if(index==2){
            OE.forEach((b)=>{
                b.classList.remove('active');
            })
            document.querySelector('.homepage__operational-efficiency__table.c').classList.add('active');
            document.querySelector('.homepage__operational-efficiency__table.b').classList.remove('active');
            document.querySelector('.homepage__operational-efficiency__table.a').classList.remove('active');
            a.classList.add('active');
        }
    })
})