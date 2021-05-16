import React, {useState, useEffect} from 'react'

const Footer = () => {
    const [year, setYear] = useState(0)
    useEffect(() => {
        setYear(year => year = new Date().getFullYear())
    },[])
    return (
    <footer className="text-center">
      <p className="m-0 p-3">copyrigt &copy; {year}</p>
    </footer>
    )
}

export default Footer
