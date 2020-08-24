const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      id: 1,
      linkUrl: '/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl:
        'https://images.pexels.com/photos/3781570/pexels-photo-3781570.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
