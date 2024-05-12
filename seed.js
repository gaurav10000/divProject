// Purpose: To seed the database with initial data.
const mongoose=require('mongoose');
const State=require("./Models/State")

 const state=[
    {
        name:"Goa",
        des:" Popularly known as India’s party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!",
        img:"https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place:[
            {
                name:"Dudhsagar Waterfalls",
                des:"Located inside the Bhagwan Mahaveer Sanctuary and Mollem National Park, this multi-tiered milky white waterfall gushes down from a height of 310 metres, making it Indias fifth-highest waterfall. It is at its maximum glory just after the rains.",
                img:"https://images.unsplash.com/photo-1529588549443-d40e806f583e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating:4.3,
            },
            {
                name:"Baga beach",
                des:"One of the most popular beaches in Goa, Baga Beach offers quirky beach-side shacks and a number of thrilling water sports.",
                img:"https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating:4.5,
            },
            {
                name:"Se Cathedral",
                des:":Located on the banks of River Mondovi, this 16th Century historic church is a UNESCO World Heritage Site dedicated to St. Catherine of Alexandria.",
                img:"https://images.unsplash.com/photo-1560887665-8a8ab31bc954?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating:4,
            },
            {
                name:"Salaulim Dam",
                des:"The Salaulim Dam sits on the banks of the Saulim River which is a tributary of the Zuari River. Located 5km from Sanguem Town, it is interesting to note that the entire drinking water of South Goa comes from here. The dam is spread on an area more than 24 sq. km and offers pleasant break from the beaches.",
                img:"https://images.unsplash.com/photo-1520361098688-a4b9960d394b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                rating:4.1,
            }
        ],
        
        
    },  
    {
        name: "Madhya Pradesh",
        des: "Madhya Pradesh, located in central India, is known for its rich history, diverse wildlife, and architectural marvels. From ancient temples to national parks, Madhya Pradesh offers a tapestry of cultural and natural wonders.",
        img: "https://plus.unsplash.com/premium_photo-1661963839850-b4be117aff11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hZGh5YSUyMHByYWRlc2h8ZW58MHx8MHx8fDA%3D",
        place: [
            {
                name: "Khajuraho Group of Monuments",
                des: "A UNESCO World Heritage Site, the Khajuraho Group of Monuments is famous for its stunning intricately carved temples, depicting various facets of human life and sexuality.",
                img: "https://plus.unsplash.com/premium_photo-1694475518874-bd12a29e3332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2hhanVyYWhvJTIwR3JvdXAlMjBvZiUyME1vbnVtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.6
            },
            {
                name: "Bandhavgarh National Park",
                des: "One of India's most famous national parks, Bandhavgarh is known for its high density of Bengal tigers. It also offers rich biodiversity and opportunities for wildlife safaris.",
                img: "https://images.unsplash.com/photo-1670421291769-f0737d03d64c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFuZGhhdmdhcmglMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
                rating: 4.8
            },
            {
                name: "Sanchi Stupa",
                des: "Located in the town of Sanchi, this ancient Buddhist monument is a UNESCO World Heritage Site. The Great Stupa is one of the oldest stone structures in India, dating back to the 3rd century BCE.",
                img: "https://images.unsplash.com/photo-1585744945554-5df801d2b680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FuY2hpJTIwU3R1cGF8ZW58MHx8MHx8fDA%3D",
                rating: 4.4
            },
            {
                name: "Gwalior Fort",
                des: "Perched on a hilltop in the city of Gwalior, this imposing fort complex offers panoramic views of the surrounding area. It houses several palaces, temples, and water tanks.",
                img: "https://images.unsplash.com/photo-1691515310304-08816f9391d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R3dhbGlvciUyMEZvcnR8ZW58MHx8MHx8fDA%3D",
                rating: 4.2
            },
            {
                name: "Pachmarhi",
                des: "Nestled in the Satpura Range, Pachmarhi is a hill station known for its lush forests, cascading waterfalls, and serene surroundings. It's a popular retreat for nature lovers and adventure enthusiasts.",
                img: "https://images.unsplash.com/photo-1704633396200-79f80c9ad208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFjaG1hcmhpfGVufDB8fDB8fHww",
                rating: 4.5
            }
        ]
    },  
    {
        name: "Uttarakhand",
        des: "Uttarakhand, often referred to as the 'Land of Gods', is a state in northern India known for its stunning Himalayan landscapes, sacred pilgrimage sites, and adventure sports. From snow-capped peaks to pristine rivers, Uttarakhand offers a haven for nature lovers and spiritual seekers alike.",
        img: "https://images.unsplash.com/photo-1563293766-4e8ab7be1ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHV0dHJha2hhbmQlMjBtdXNzb3JpZXxlbnwwfHwwfHx8MA%3D%3D",
        place: [
            {
                name: "Valley of Flowers National Park",
                des: "A UNESCO World Heritage Site, the Valley of Flowers is a mesmerizing alpine valley known for its diverse flora, including many rare and endangered species. It blooms with vibrant colors during the monsoon season.",
                img: "https://plus.unsplash.com/premium_photo-1687880798413-70d64c354837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHV0dHJha2hhbmQlMjBWYWxsZXklMjBvZiUyMEZsb3dlcnMlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D",
                rating: 4.7
            },
            {
                name: "Jim Corbett National Park",
                des: "India's oldest national park, Jim Corbett is renowned for its population of Bengal tigers and other wildlife species. It offers opportunities for jungle safaris, birdwatching, and nature walks.",
                img: "https://images.unsplash.com/photo-1670421291781-4d54641ded9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHV0dHJha2hhbmQlMjBKaW0lMjBDb3JiZXR0JTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww",
                rating: 4.6
            },
            {
                name: "Rishikesh",
                des: "Located on the banks of the Ganges River, Rishikesh is a spiritual hub and adventure capital of India. It's famous for its yoga and meditation centers, as well as thrilling activities like river rafting and bungee jumping.",
                img: "https://images.unsplash.com/photo-1711992437606-bd676fb6fdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmlzaGlrZXNoJTIwcmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.5
            },
            {
                name: "Nainital",
                des: "Surrounded by mountains and dotted with lakes, Nainital is a picturesque hill station known for its scenic beauty and pleasant climate. Boating on Naini Lake and exploring nearby viewpoints are popular activities.",
                img: "https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmFpbml0YWx8ZW58MHx8MHx8fDA%3D",
                rating: 4.3
            },
            {
                name: "Mussoorie",
                des: "Perched atop a horseshoe-shaped ridge, Mussoorie is a charming hill station known for its colonial architecture, misty valleys, and panoramic views of the Himalayas. It's often referred to as the 'Queen of Hills'.",
                img: "https://images.unsplash.com/photo-1612092208229-55bc45975f06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXVzc29vcmllfGVufDB8fDB8fHww",
                rating: 4.4
            }
        ]
    },
    {
        name: "Kerala",
        des: "Kerala, often referred to as 'God's Own Country', is a tropical paradise located in the southern part of India. With its palm-fringed backwaters, serene beaches, lush hill stations, and vibrant culture, Kerala offers a unique blend of natural beauty and cultural heritage.",
        img: "https://images.unsplash.com/photo-1593872356907-d67e8587d0f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
        place: [
            {
                name: "Alleppey (Alappuzha)",
                des: "Famous for its intricate network of backwaters, Alleppey is often called the 'Venice of the East'. Houseboat cruises through the serene backwaters are a highlight of any visit to Kerala.",
                img: "https://images.unsplash.com/photo-1708017128148-cc7a14180555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWxsZXBwZXklMjAoQWxhcHB1emhhKSUyMGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.7
            },
            {
                name: "Munnar",
                des: "Nestled in the Western Ghats, Munnar is a hill station known for its sprawling tea plantations, misty valleys, and scenic beauty. It's a popular destination for honeymooners and nature lovers.",
                img: "https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE11bm5hciUyMCUyMGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.8
            },
            {
                name: "Kochi (Cochin)",
                des: "A vibrant port city with a rich history, Kochi is known for its colonial architecture, bustling spice markets, and eclectic cuisine influenced by its diverse cultural heritage.",
                img: "https://plus.unsplash.com/premium_photo-1697729597066-7b3d09b6dab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S29jaGklMjAoQ29jaGluKSUyMGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.6
            },
            {
                name: "Wayanad",
                des: "Surrounded by lush forests, Wayanad is a nature lover's paradise known for its pristine landscapes, wildlife sanctuaries, and adventurous trekking trails. It offers a perfect escape into the lap of nature.",
                img: "https://images.unsplash.com/photo-1699563257711-c7b96afd4ac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2F5YW5hZCUyMGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4.5
            },
            {
                name: "Kovalam",
                des: "Located along the Arabian Sea coast, Kovalam is a popular beach destination known for its golden sands, shallow waters, and palm-fringed shores. It's ideal for swimming, sunbathing, and water sports.",
                img: "https://images.unsplash.com/photo-1701792595041-c0c78b877b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtvdmFsYW0lMjBrZXJhbGF8ZW58MHx8MHx8fDA%3D",
                rating: 4.4
            }
        ]
    }
    
    

]
// async function seed(){
//     // await Product.deleteMany({});
//     await State.insertMany(state);
//     console.log("data seeded");
// }
module.exports=state;