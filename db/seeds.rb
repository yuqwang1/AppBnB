# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
User.destroy_all
Spot.destroy_all
u0 = User.create!(
  username: "guest",
  email: "user@user.io",
  password: "123456"
)

u1 = User.create!(
  username: "Adam Rothman",
  email: "arothman@gmail.org",
  password: "hunter12"
)

u2 = User.create!(
  username: "Ardrew Young",
  email: "ayoung@pen-international.org",
  password: "123456"
)

u3 = User.create!(
  username: "Blake Woodruff",
  email: "blakewood@pinspot.com",
  password: "asdfgh"
)

u4 = User.create!(
  username: "Charles Dan",
  email: "charlesdan@yahoo.edu",
  password: "belljar"
)

u5 = User.create!(
  username: "ErinMay",
  email: "emay@themount.com",
  password: "starwall"
)

u6 = User.create!(
  username: "E. M. Forster",
  email: "emf@bloomsbury.org",
  password: "buckingham"
)

u7 = User.create!(
  username: "Ethan Woods",
  email: "Ewoods@apple.com",
  password: "nevermore"
)

u8 = User.create!(
  username: "Johanthan Karl",
  email: "jkarl@uhavana.edu",
  password: "jkarl1"
)

u9 = User.create!(
  username: "Guillermo Cabrera Infante",
  email: "gcain@lunes.org",
  password: "revolucion"
)

u10 = User.create!(
  username: "KevinVan",
  email: "kevinVD@amazon.org",
  password: "kvandyke"
)


l0 = Spot.create!(
  host_id: u0.id,
  title: "Private Bedroom Manhattan ",
  details: "The layout of the apartment gives you added privacy. Nice cozy brownstone building with walk up. Alot of steps & just steps outside:
Starbucks, Large 24 hour Supermarket, Duane Reade, 24 hr Dunkin Donuts, Several Banks: NYSC, Chase Bank, Bank of America, Citi Bank, Carver Federal and Capitol Bank, Post Office, Public Library, Several hardware stores and much much more!",
  img_url: 'https://a0.muscache.com/im/pictures/ad37d7ec-4719-4b7e-a967-94f7e4bd262a.jpg?aki_policy=xx_large',
  lat: 40.751318,
  lng: -73.983928,
  cost: 55,
  guest: 2,
  bedrooms: 1,
  beds: 1,
  bath: 1
)

l1 = Spot.create!(
  host_id: u1.id,
  title: "TriBeCa 2500 Sq Ft w/ Priv Elevator",
  details: "2500 square feet TriBeCa loft with 13-feet exposed beam ceilings, hardwood floors and over-sized windows. Three bedrooms, two bathrooms, large kitchen, washer/dryer, art, and modern furnishings. We own our building, live on the premises, and are available for assistance at all times. We are in compliance with all local and state rent laws.",
  img_url: 'https://a0.muscache.com/im/pictures/15619021/d6cf8207_original.jpg?aki_policy=xx_large',
  lat: 40.731582,
  lng: -74.000901,
  cost: 450,
  guest: 10,
  bedrooms: 3,
  beds: 3,
  bath: 2
)

l2 = Spot.create!(
  host_id: u1.id,
  title: "Saloon room with dock access",
  details: "Come for the accessibility via coal barge. Stay for the dramatic family reunions.",
  img_url: 'https://a0.muscache.com/im/pictures/1dcc3c9f-7bd2-4e16-8c25-dfe67b63317d.jpg?aki_policy=xx_large',
  lat: 40.712622,
  lng: -74.013181,
  cost: 35,
  guest: 2,
  bedrooms: 1,
  beds: 2,
  bath: 1
)

l3 = Spot.create!(
  host_id: u2.id,
  title: "Cozy 15 mins Manhattan& 10 Mins LGA",
  details: "My place is located in Queens, NYC close to LaGuardia Airport, Midtown Manhattan, 15 to 20 mins Subway ride you can be at all major tourist location also we are close to U.S. Open tennis in Flushing, Electric Zoo, Citi Field Mets Stadium to name a few. I'm located in the heart of all the Boro's which is called Jackson Heights - Queens.This room is suitable for one person traveling light.GREAT for students & tourists. Receiving 5 STAR reviews since the beginning! We are super clean and friendly!",
  img_url: 'https://a0.muscache.com/im/pictures/6808875/34c6b461_original.jpg?aki_policy=xx_large',
  lat: 40.720845,
  lng: -73.956944,
  cost: 62,
  guest: 1,
  bedrooms: 1,
  beds: 1,
  bath: 1
)

l4 = Spot.create!(
  host_id: u2.id,
  title: "Manhattan brownstone with renovation potential",
  details: "You specialize in something until one day you find it is specializing in you. Enquire about our furniture sale!",
  img_url: 'https://a0.muscache.com/im/pictures/45639487/bba7496b_original.jpg?aki_policy=xx_large',
  lat: 40.741169,
  lng: -73.983179,
  cost: 110,
  guest: 5,
  bedrooms: 3,
  beds: 3,
  bath: 1
)

l5 = Spot.create!(
  host_id: u3.id,
  title: "Magic Manhattan with Rooftop",
  details: "Stay in your very own, cool downtown apartment with designer furniture and rooftop with downtown skyline views. Access to amazing rooftop garden.",
  img_url: 'https://a0.muscache.com/im/pictures/27720090/20bd06e4_original.jpg?aki_policy=xx_large',
  lat: 40.764453,
  lng: -73.974418,
  cost: 19,
  guest: 2,
  bedrooms: 1,
  beds: 1,
  bath: 1
)

l6 = Spot.create!(
  host_id: u4.id,
  title: "Manhattan Lux Loft.Like.Love.Lots.Look !",
  details: "Convenient hotel room for women with wealthy parents.
  While all tDowntown, the best bit of Manhattan. One of, if not the, LARGEST space on Airbnb in NYC. Your Own PRIVATE Bathroom & PRIVATE Bedroom, a Terrace off the bedroom, near to subways/buses, restaurants, bars, real luxury right in the middle of things. Just read our 400+ 5-STAR REVIEWS and you will see why we are SUPER-HOSTS and why you will just love this place, like other guest, I promise.",
  img_url: 'https://a0.muscache.com/im/pictures/12426057/2292b61c_original.jpg?aki_policy=xx_large',
  lat: 40.764553,
  lng: -73.966209,
  cost: 197,
  guest: 5,
  bedrooms: 1,
  beds: 3,
  bath: 2
)

l7 = Spot.create!(
  host_id: u5.id,
  title: "AMAZINGLY LOCATED ONE BEDROOM, NEAR CENTRAL PARK",
  details: "THE APARTMENT IS LOCATED IN THE HEART OF MANHATTAN, A COUPLE OF BLOCKS AWAY FROM CENTRAL PARK, WALKING DISTANCE TO BROADWAY SHOWS, TIMES SQUARE, HUNDREDS OF RESTAURANTS, BARS AND THE SUBWAY AND JUST 15 MINUTES WALKING TO TIMES SQUARE.",
  img_url: 'https://a0.muscache.com/im/pictures/13635814/01c58133_original.jpg?aki_policy=xx_large',
  lat: 40.767076,
  lng: -73.970748,
  cost: 99,
  guest: 2,
  bedrooms: 1,
  beds: 1,
  bath: 1
)

l8 = Spot.create!(
  host_id: u6.id,
  title: "A room with a view",
  details: "Spacious accommodation in Florentine pensione with a beautiful view of the River Arno. No transfers.",
  img_url: 'https://a0.muscache.com/im/pictures/110982486/a7a96b3a_original.jpg?aki_policy=xx_large',
  lat: 43.770060,
  lng: 11.242259,
  cost: 180,
  guest: 2,
  bedrooms: 2,
  beds: 2,
  bath: 1
)

l9 = Spot.create!(
  host_id: u7.id,
  title: "Soho 2 Bedroom Private Terrace",
  details: "THIS IS THE MANHATTAN YOU NEVER KNEW EXISTED
Classic Soho 2 bedroom loft
PRIVATE TERRACE accessed directly from your apartment
Classic views of NY life
Outdoor Barbecue
2 full bathrooms
Soho is the most chic neighborhood in Manhattan and possibly the world. The architecture, the people watching, the shopping and restaurants need no introduction. Even if you don't stay with me definitely stay in SOHO",
  img_url: 'https://a0.muscache.com/im/pictures/c1d8a249-8dbf-4b36-9d46-73e2a66b6c17.jpg?aki_policy=xx_large',
  lat: 43.777495,
  lng: 11.268200,
  cost: 149,
  guest: 5,
  bedrooms: 2,
  beds: 3,
  bath: 2
)

l10 = Spot.create!(
  host_id: u8.id,
  title: "Times Square Luxury Place",
  details: "Beautifuly designed apartment in Times Square, perfect for two guest to enjoy New York to the fullest. Clean, bright and comfortable space with it's own bathroom. Close to every cool area to see when visiting the city.",
  img_url: 'https://a0.muscache.com/im/pictures/46595026/b1915b42_original.jpg?aki_policy=xx_large',
  lat: 23.151049,
  lng: -82.349140,
  cost: 90,
  guest: 3,
  bedrooms: 1,
  beds: 1,
  bath: 1
)

l11 = Spot.create!(
  host_id: u9.id,
  title: "Beautiful affordable 4 Bedrooms in Manhattan",
  details: "Affordable stay in the big apple! This large loft style 4BR apartment is situated in the north after Upper East Side area of Manhattan, a short walk to some of New York’s finest shopping districts and site seeing",
  img_url: 'https://a0.muscache.com/im/pictures/12414357/ee255c10_original.jpg?aki_policy=xx_large',
  lat: 23.140225,
  lng: -82.378702,
  cost: 150,
  guest: 10,
  bedrooms: 4,
  beds: 5,
  bath: 1
)

l12 = Spot.create!(
  host_id: u10.id,
  title: "Luxury Chelsea Loft 4Bedrooms/2Bath Sleep 10",
  details: "Absolutely stunning full floor loft with tremendous skylights!! Enjoy NYC from this immaculately kept, 2000 sq ft full floor 4 bed, 2 bath residence located in Chelsea. Step off the private keyed elevator into your newly renovated home with 11 foot ceilings- 7 foot windows, central air conditioning and hardwood floors throughout.",
  img_url: 'https://a0.muscache.com/im/pictures/108547002/36b52448_original.jpg?aki_policy=xx_large',
  lat: 59.927741,
  lng: 30.311064,
  cost: 300,
  guest: 10,
  bedrooms: 4,
  beds: 6,
  bath: 2
)

l13 = Spot.create!(
  host_id: u8.id,
  title: "Luxury midtown mini mansion! Sleeps 16!",
  details: "Come stay in this beautiful 4-story, single-family townhouse in prime Manhattan minutes away from Central Park, Broadway Theaters, 5-star and Michelin rated restaurants and the best shopping Manhattan has to offer! This expansive house has 7 bedrooms, most with their own bathrooms. Cook and entertain like a local in the updated kitchen, or barbecue outside in the manicured garden. Sip a cocktail with your group on the roof deck and enjoy the views and sunsets.",
  img_url: 'https://a0.muscache.com/im/pictures/10fce564-6222-48d5-97f4-056e1e0ba9f1.jpg?aki_policy=xx_large',
  lat: 40.773455,
  lng: -73.972993,
  cost: 891,
  guest: 16,
  bedrooms: 6,
  beds: 11,
  bath: 5
)

l14 = Spot.create!(
  host_id: u6.id,
  title: "Manhattan's Best Deal!",
  details: "Welcome to Harlem! Everything is close by! 2 mins to the express Metro/Subway that will have you in Times Square in 20 minutes! There's a grocery story across the street. Excellent restaurants and entertainment are in walking distance!",
  img_url: 'https://a0.muscache.com/im/pictures/f172fcaa-46f6-4850-9f5d-177dbfbb5b2f.jpg?aki_policy=xx_large',
  lat: 40.721594,
  lng: -73.986572,
  cost: 165,
  guest: 6,
  bedrooms: 2,
  beds: 5,
  bath: 1
)

l15 = Spot.create!(
  host_id: u4.id,
  title: "Affordable, Private, Simple & Clean NYC Flat!",
  details: "My very clean and private, small studio flat sleeps up to 5. Nearby trains get you to Times Square in 15 minutes! The apt has a peaceful feel, the standard full bed has an amazing memory foam mattress and there are two sofa beds / futons, in addition to a full air mattress. Markets and restaurants are nearby. Get $77 in savings codes for awesome food delivery & taxi apps when you book with me!",
  img_url: 'https://a0.muscache.com/im/pictures/1d2470e0-095e-4811-b95f-2b2a6cf64a3b.jpg?aki_policy=xx_large',
  lat: 40.704964,
  lng: -74.012003,
  cost: 110,
  guest: 5,
  bedrooms: 4,
  beds: 4,
  bath: 1
)
