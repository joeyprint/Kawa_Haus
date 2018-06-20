<section id="plan">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p class="topic-text">แบบแปลนและผังห้อง</p>
            </div>
        </div>
    </div>
    <div class="container-fluid no-padding bg">
        <div class="container no-padding">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-3 text-center btn-margin btn-plan">
                    <p class="no-margin">ผังห้อง</p>
                </div>
            </div>
            <div class="row d-block d-lg-none type-plan">
                <div class="d-flex flex-row justify-content-center">
                    <div class="col-10">
                        <select class="select-btn" name="plan" id="plan">
                            <option class="option-text" value="1A" data-hash="zero">TYPE 1A-1 33.50-34.00SQ.M </option>
                            <option class="option-text" value="1E" data-hash="one">TYPE 1E-2 35.75-36.00SQ.M</option>
                            <option class="option-text" value="2B" data-hash="two">TYPE 2B-2 51.25SQ.M</option>
                            <option class="option-text" value="2D" data-hash="three">TYPE 2D-2-67.25SQ.M</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row d-none d-lg-block type-plan">
                <div class="d-flex flex-row justify-content-center">
                    <div class="text-center col-3" data-hash="0">
                        <p class="option-text">TYPE 1A-1 33.50-34.00SQ.M</p>
                    </div>
                    <div class="text-center col-3" data-hash="one">
                        <p class="option-text">TYPE 1E-2 35.75-36.00SQ.M</p>
                    </div>
                    <div class="text-center col-3" data-hash="two">
                        <p class="option-text">TYPE 2B-2 51.25SQ.M</p>
                    </div>
                    <div class="text-center col-3" data-hash="three">
                        <p class="option-text">TYPE 2D-2-67.25SQ.M</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="line"></div>
            </div>
        </div>
    </div>
    <div class="container plan-all">
        <div class="row justify-content-center no-gutters">
            <div class="col-12">
                <div class="owl-carousel owl-theme owl-loaded">
                    <div class="owl-stage-outer">
                        <div class="row">
                            <div class="col-10 col-lg-6">
                                <div class="owl-stage">
                                    <div class="owl-item plan-block">
                                        <img class="plan-size plan-pos" src="{{ asset('/imgs/plan1A.png') }}" alt="plan 1A">
                                        <div class="row justify-content-center inno-pos">
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/counter_kitchen_icon.png') }}" alt="kitchen">
                                                <p class="text-uppercase inno-text">COUNTER KITCHEN</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-livingspace.svg') }}" alt="living space">
                                                <p class="text-uppercase inno-text">LIVING SPACE WITH BALCONY WINDOW</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item plan-block">
                                        <img class="plan-size plan-pos" src="{{ asset('/imgs/plan1E.png') }}" alt="plan 1E">
                                        <div class="row justify-content-center inno-pos">
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-closekitchen.svg') }}" alt="closed kitchen">
                                                <p class="text-uppercase inno-text">CLOSED KITCHEN</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/walkin_icon.png') }}" alt="Walk-in Closet">
                                                <p class="text-uppercase inno-text">WALK-IN CLOSET</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-livingspace.svg') }}" alt="living space">
                                                <p class="text-uppercase inno-text">LIVING SPACE WITH BALCONY WINDOW</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item plan-block">
                                        <img class="plan-size plan-pos" src="{{ asset('/imgs/plan2B.png') }}" alt="plan 2B">
                                        <div class="row justify-content-center inno-pos">
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-closekitchen.svg') }}" alt="closed kitchen">
                                                <p class="text-uppercase inno-text">CLOSED KITCHEN</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-duelwashroom.svg') }}" alt="Walk-in Closet">
                                                <p class="text-uppercase inno-text">WALK-IN CLOSET</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-livingspace.svg') }}" alt="living space">
                                                <p class="text-uppercase inno-text">LIVING SPACE WITH BALCONY WINDOW</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item plan-block">
                                        <img class="plan-size plan-pos" src="{{ asset('/imgs/plan2D.png') }}" alt="plan 2D">
                                        <div class="row justify-content-center inno-pos">
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-closekitchen.svg') }}" alt="closed kitchen">
                                                <p class="text-uppercase inno-text">CLOSED KITCHEN</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-bathtup.svg') }}" alt="BATHTUB">
                                                <p class="text-uppercase inno-text">BATHTUB</p>
                                            </div>
                                            <div class="col-6 col-lg-2 text-center">
                                                <img class="inno-size" src="{{ asset('/imgs/iconplan-livingspace.svg') }}" alt="living space">
                                                <p class="text-uppercase inno-text">LIVING SPACE WITH BALCONY WINDOW</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 arrow-pos">
                        <div class="row">
                            <div class="col-6 text-left">
                                <div class="owl-prev">
                                    <img src="{{ asset('/imgs/arrow_left.png') }}" alt="prev">
                                </div>
                            </div>
                            <div class="col-6 text-right">
                                <div class="owl-next">
                                    <img src="{{ asset('/imgs/arrow_right.png') }}" alt="next">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid pos-for-watermask">
        <div class="row justify-content-center">
            <div class="col-8 col-lg-3 text-center btn-download">
                <p class="no-margin">ดาวน์โหลดแปลนอาคาร</p>
            </div>
            <div class="col-8 col-lg-3 text-center btn-download">
                <p class="no-margin">ดาวน์โหลดแปลนห้อง</p>
            </div>
        </div>
        <div class="row">
            <img class="d-none d-lg-block water-mask-left" src="{{ asset('/imgs/kawa_water.png') }}" alt="water mask">
        </div>
    </div>
</section>