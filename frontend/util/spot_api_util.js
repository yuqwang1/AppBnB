  export const fetchSpots = () => {
    return $.ajax({
      method: 'GET',
      url: 'api/spots',
      
    })
  }
