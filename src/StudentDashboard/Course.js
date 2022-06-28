import React from 'react'
import ReusebleCard from './ReusebleCard'

const Course = () => {
    const data = [
        {course: 'Web Development'},
        {course: 'Graphic Design'},
        {course: 'Motion Graphic'},
    ]
  return (
    <div>
        <ReusebleCard title='Courses' data={data} hText1="Course Name" hText2='Course Duration' hText3='Course Fee'/>
    </div>
  )
}

export default Course