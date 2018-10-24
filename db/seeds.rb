# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
User.destroy_all
Spot.destroy_all
Review.destroy_all
Booking.destroy_all

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


s0 = Spot.create!(
  host_id: u1.id,
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

s1 = Spot.create!(
  host_id: u0.id,
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

s2 = Spot.create!(
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

s3 = Spot.create!(
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

s4 = Spot.create!(
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

s5 = Spot.create!(
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

s6 = Spot.create!(
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

s7 = Spot.create!(
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

s8 = Spot.create!(
  host_id: u6.id,
  title: "LUXURY HUGE 2BR DUPLEX NEAR TRAIN w PATIO OASIS",
  details: "Spacious accommodation in Florentine pensione with a beautiful view of the River Arno. No transfers.",
  img_url: 'https://a0.muscache.com/im/pictures/110982486/a7a96b3a_original.jpg?aki_policy=xx_large',
  lat: 40.770060,
  lng: -73.970750,
  cost: 180,
  guest: 2,
  bedrooms: 2,
  beds: 2,
  bath: 1
)

s9 = Spot.create!(
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
  lat: 40.712790,
  lng: -73.989247,
  cost: 149,
  guest: 5,
  bedrooms: 2,
  beds: 3,
  bath: 2
)

s10 = Spot.create!(
  host_id: u8.id,
  title: "Times Square Luxury Place",
  details: "Beautifuly designed apartment in Times Square, perfect for two guest to enjoy New York to the fullest. Clean, bright and comfortable space with it's own bathroom. Close to every cool area to see when visiting the city.",
  img_url: 'https://a0.muscache.com/im/pictures/46595026/b1915b42_original.jpg?aki_policy=xx_large',
  lat: 40.7283398,
  lng: -74.0052507,
  cost: 90,
  guest: 3,
  bedrooms: 1,
  beds: 1,
  bath: 1
)

s11 = Spot.create!(
  host_id: u9.id,
  title: "Beautiful affordable 4 Bedrooms in Manhattan",
  details: "Affordable stay in the big apple! This large loft style 4BR apartment is situated in the north after Upper East Side area of Manhattan, a short walk to some of New York’s finest shopping districts and site seeing",
  img_url: 'https://a0.muscache.com/im/pictures/12414357/ee255c10_original.jpg?aki_policy=xx_large',
  lat: 40.729137,
  lng: -74.001219,
  cost: 150,
  guest: 10,
  bedrooms: 4,
  beds: 5,
  bath: 1
)

s12 = Spot.create!(
  host_id: u10.id,
  title: "Luxury Chelsea Loft 4Bedrooms/2Bath Sleep 10",
  details: "Absolutely stunning full floor loft with tremendous skylights!! Enjoy NYC from this immaculately kept, 2000 sq ft full floor 4 bed, 2 bath residence located in Chelsea. Step off the private keyed elevator into your newly renovated home with 11 foot ceilings- 7 foot windows, central air conditioning and hardwood floors throughout.",
  img_url: 'https://a0.muscache.com/im/pictures/108547002/36b52448_original.jpg?aki_policy=xx_large',
  lat: 40.717939,
  lng: -73.990739,
  cost: 300,
  guest: 10,
  bedrooms: 4,
  beds: 6,
  bath: 2
)

s13 = Spot.create!(
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

s14 = Spot.create!(
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

s15 = Spot.create!(
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

r1 = Review.create!(
  rating: 5,
  user_id: u2.id,
  spot_id: s0.id,
  review: 'Great place to stay for a trip to NYC. Spotless room. Awesome location. Great communication!'
)
r2 = Review.create!(
  rating: 4,
  user_id: u1.id,
  spot_id: s0.id,
  review: 'Clean, spacious and convenient. Perfect location! Kam made us feel very comfortable. He was warm, welcoming and very helpful! Would definitely stay here again.'
)
r3 = Review.create!(
  rating: 5,
  user_id: u2.id,
  spot_id: s1.id,
  review: 'The hospitality was fantastic. It is obvious that Jake will go out of his way to get whatever you need. There is a fish smell out in the hallway, but once you are in your apartment, it’s a great home away from home.'
)
r4 = Review.create!(
  rating: 4,
  user_id: u3.id,
  spot_id: s1.id,
  review: 'Very clean and spacious. Transportation information on how to get to NYC was given and easily followed. The neighborhood is quiet and we had no qualms about walking from the bus stop late at night. We really enjoyed our stay here.'
)
r5 = Review.create!(
  rating: 5,
  user_id: u4.id,
  spot_id: s1.id,
  review: 'This really is a GREAT apartment in the lower east side. MANY small issues prevent me from giving this place 5 stars. I have messaged Jake privately about these issues and I trust he is an honest guy who will work to correct these issues....just as he DID purchase a wonderfully comfortable bed and linens after a different  suggested so. I paid my maximum, per night allowance....but was not happy with the value due to cleanliness issues. Subway is JUST around the corner, making navigating the city EASY.'
)
r6 = Review.create!(
  rating: 5,
  user_id: u5.id,
  spot_id: s2.id,
  review: 'Carol and Marc’s apartment was perfect for our needs. The location was great and the price was right. It saved us from spending hundreds more on getting 2 NYC hotel rooms. We enjoyed getting to meet the very friendly hosts and I’m a big fan of the modern style and furnishings in their apartment. Thanks again.'
)
r7 = Review.create!(
  rating: 5,
  user_id: u2.id,
  spot_id: s2.id,
  review: 'The location is great. The host is great. The apartment has potential but the pictures do make it look nicer and bigger than it is. Trash in the stairway does smell in the apartment, windows don’t hold much noise and let through heat/cold, bathroom and kitchen are pretty basic with minimal amenities and bed has a noticeable slope in it'
)
r8 = Review.create!(
  rating: 5,
  user_id: u10.id,
  spot_id: s2.id,
  review: 'I am a fairly frequent AirBnB traveler. Michelle’s home was top notch and all communication with her was 100%. My wife and I felt like locals in this space. It was about a 10 minute walk to the train that took us into Manhattan. Take the express and it’s pretty fast. The neighborhood is totally residential. Easy parking on street. Another reviewer mentioned some noise from neighbors. We did not have any issues at all. I would definitely stay again.
'
)
r9 = Review.create!(
  rating: 5,
  user_id: u8.id,
  spot_id: s3.id,
  review: 'Absolutely loved it'
)
r10 = Review.create!(
  rating: 4,
  user_id: u5.id,
  spot_id: s3.id,
  review: 'Fantastic, clean, comfortable spot in Brooklyn. Only a short stroll from the subway, and close to several good options for food, drinks, and groceries. The neighborhood is gorgeous and worthy of many long walks.
'
)
r11 = Review.create!(
  rating: 4,
  user_id: u2.id,
  spot_id: s3.id,
  review: 'This is a great place. Perfect sized room for a getaway. It was nice that there was a small kitchen for our use as well.'
)
r12 = Review.create!(
  rating: 5,
  user_id: u7.id,
  spot_id: s3.id,
  review: 'The home was clean, warm, and quiet. Everything we needed. Recommend.
'
)
r13 = Review.create!(
  rating: 5,
  user_id: u5.id,
  spot_id: s4.id,
  review: 'I’ve stayed here before and would do so again, great location and hosts are one of the best I’ve see;'
)
r14 = Review.create!(
  rating: 5,
  user_id: u2.id,
  spot_id: s4.id,
  review: 'Our girls trip of 15 enjoyed the stay at Ruth place. Ruth was helpful and made everything so easy for us.'
)
r15 = Review.create!(
  rating: 4,
  user_id: u3.id,
  spot_id: s5.id,
  review: 'Thoroughly enjoyed my stay at Nansi’s accommodation right off of the Champs Elysses main strip. Great value for the price, would recommend it!'
)
r16 = Review.create!(
  rating: 3,
  user_id: u4.id,
  spot_id: s5.id,
  review: 'Nice place, but owners are very accusatory'
)
r17 = Review.create!(
  rating: 5,
  user_id: u5.id,
  spot_id: s5.id,
  review: 'Great central location to Champs Elyses, Arc de Triomphe and Eiffel Tower as well as many other touristy spots (if you are wanting to see the tourist sights). '
)
r18 = Review.create!(
  rating: 5,
  user_id: u6.id,
  spot_id: s5.id,
  review: 'This spot was perfect for us! We loved the cozy, underground bedroom and could have slept in for hours if we did not have so many things to see on our visit. The upstairs space was also fun to hang out in. The location worked out great for us (convenient to trains, felt walkable, etc.) and we fell in love with a nearby coffee shop/Japanese spot with rooftop access (Brooklyn Ball Factory).'
)
r19 = Review.create!(
  rating: 5,
  user_id: u7.id,
  spot_id: s6.id,
  review: 'A really great place! Well located in a great neighborhood. Did not feel cramped with three adults and we felt surprisingly spacious. Great looking on the inside. We would definitely stay here again given then chance.'
)
r20 = Review.create!(
  rating: 5,
  user_id: u9.id,
  spot_id: s6.id,
  review: 'Great apartment, location etc. not too far from the subway and plenty of on street parking.'
)
r21 = Review.create!(
  rating: 5,
  user_id: u10.id,
  spot_id: s6.id,
  review: 'Heather was so quick to respond. Her place is immaculately clean and spaciou'
)
r22 = Review.create!(
  rating: 5,
  user_id: u6.id,
  spot_id: s6.id,
  review: 'Such a beautiful space! Heather was attentive and helpful with anything we needed. Thank you!'
)
r23 = Review.create!(
  rating: 5,
  user_id: u9.id,
  spot_id: s7.id,
  review: 'A perfect location for our first stay in Williamsburg. Everything was an easy walk away - food, drink and subway. I highly recommend Sal''s thick crust pizza down the street. The basement sleeping area was perfect - we had little issue with outside and upstairs noise at night.'
)

r24 = Review.create!(
  rating: 5,
  user_id: u8.id,
  spot_id: s7.id,
  review: 'Thank you SO much Tom for such a pleasant, amazing stay! Could not have asked for a better place to stay!'
)

r25 = Review.create!(
  rating: 4,
  user_id: u10.id,
  spot_id: s7.id,
  review: 'This is definitely a "you get what you pay for"place. The basement room is just that-a bit dark and a bit damp. The location is great but DO NOT try to park. We had a rental car from a trip upstate and it was a nightmare. Overall tho-we were glad it was available and glad we got to experience Harlem. Definitely recommend the Grange restaurant!!'
)

r26 = Review.create!(
  rating: 4,
  user_id: u1.id,
  spot_id: s8.id,
  review: 'Thre space was exactly as described, great for our one night stay, great location!'
)
r27 = Review.create!(
  rating: 5,
  user_id: u2.id,
  spot_id: s8.id,
  review: 'This apartment was perfect for a very quick trip. I appreciated Tom''s quick response when we had issues with our check-in.'
)
r28 = Review.create!(
  rating: 5,
  user_id: u3.id,
  spot_id: s8.id,
  review: 'A unique place to experience New York from. Amazing food and sights are just a few blocks away. Safe space. Simple and clean. Check in and check out is something you should discuss with him before booking your flight as it is not completely flexible. And bringing some disinfectant wipes for the drawers, nooks and crannies is helpful as well. Definitely would stay again!'
)
r29 = Review.create!(
  rating: 3,
  user_id: u4.id,
  spot_id: s8.id,
  review: 'Our trip was short but this space exceeded my expectations. The studio is so cute and chic and most of all clean! It’s in an amazing location and really close to the train. I will be staying here again.'
)
r30 = Review.create!(
  rating: 4,
  user_id: u10.id,
  spot_id: s9.id,
  review: 'This place was very nice and check-in was pretty simple. '
)
r31 = Review.create!(
  rating: 5,
  user_id: u7.id,
  spot_id: s9.id,
  review: 'Great Brooklyn spot; convenient access to all that is happening in Williamsburg.'
)

r32 = Review.create!(
  rating: 5,
  user_id: u6.id,
  spot_id: s9.id,
  review: 'Beautiful and lovely space! A joy to stay in. Highly recommend!'
)
r33 = Review.create!(
  rating: 5,
  user_id: u5.id,
  spot_id: s9.id,
  review: 'Great location. Steps away from new riverfront park. Quaint and comfortable space.'
)
