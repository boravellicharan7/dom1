function inf() {
    setTimeout(function () {
        var card = document.getElementById("trip")
        card.innerHTML = `<section class="popular-places" id="popular" style="text-align: center;">
        <small style="color: blue; font-size: 0.8rem; font-family: Verdana, Geneva, Tahoma, sans-serif;">Popular
            Places</small>
        <p style="font-weight: 650;">To Travel is to Live...</p>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipM2S7AKQmDdbYejn0pgFtiAXwRwVvSIVxbd8QbN=w341-h256-k-no"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Arc de Triomphe</h5>
                            <p class="card-text">Iconic triumphal arch built to commemorate Napoleon's victories, with
                                an observation deck.⁦The ⁩⁦Arc de Triomphe⁩⁦ is one of the most famous monuments in
                                ⁩⁦Paris⁩, ⁦France⁩⁦, standing at the western end of the Champs-Élysées</p>
                            <a href="#" class="btn btn-primary">See More...</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOB_dBm_5jKqfStPXn1eifoxTwDvyxb5JnvyAWp=s1360-w1360-h1020-rw"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Palais Garnier</h5>
                            <p class="card-text">talian-style opera house with ceiling painted by Chagall & library
                                museum in 19th-century building.⁦Palais Garnier⁩⁦ is open from 10am to 4pm except
                                closures (see calendar).An architectural masterpiece inaugurated in 1875.</p>
                            <a href="#" class="btn btn-primary">See More...</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipPlpAY2FzC-shJ0F6Apbz8a0wkevB5SiYn_N1VU=s1360-w1360-h1020-rw"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">The Centre Pompidou</h5>
                            <p class="card-text">Architecturally avant-garde complex housing National Museum of Modern
                                Art, library and music center.The first collection of modern and contemporary art in
                                Europe, exhibitions, shows, debates, activities for children...</p>
                            <a href="#" class="btn btn-primary">See More...</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipMPheyuIJKZjrB9x8_J8_b_grbcH21pwR5eE0YP=s1360-w1360-h1020-rw"
                            class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Tuileries Garden</h5>
                            <p class="card-text">Expansive, 17th-century formal garden dotted with statues, including 18
                                bronzes by Maillol.The ⁩⁦Tuileries Garden⁩⁦ is a public garden between the Louvre and
                                the Place de la Concorde in the 1st arrondissement of ⁩⁦Paris⁩, ⁦France⁩⁦.</p>
                            <a href="#" class="btn btn-primary">See More...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`
    }, 3000)
}