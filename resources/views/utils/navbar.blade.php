<section id="navbar">
    <div class="container-fluid">
        <div class="row d-none d-lg-block navbar-bg line paddingTB18">
            <div class="col-12 text-center">
                <img src="{{ asset('/imgs/logo_sansiri.png') }}" alt="Sansiri Logo" width="62px">
            </div>
        </div>
        <div class="row navbar-bg navbar-main">
            <nav class="navbar navbar-expand-lg navbar-light w-100">
                <a class="navbar-brand" href="#">
                    <img class="logo-size" src="{{ asset('/imgs/logo_kawahaus.png') }}" alt="KAWA Logo">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link menu" href="#">หน้าหลัก <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu" href="#">แนวคิดโครงการ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu" href="#">โปรเจคไฮไลค์</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu" href="#">แบบแปลน</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu" href="#">แกลเลอรี่</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu" href="#">ที่ตั้งโครงการ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu" href="#">ลงทะเบียนรับข้อมูลเพิ่มเติม</a>
                        </li>
                        <li class="nav-item d-block d-lg-none">
                            <select class="change-menu">
                                <option class="">TH</option>
                                <option class="">EN</option>
                            </select>
                        </li>
                        <li class="nav-item d-block d-lg-none">
                            <a class="nav-link menu" href="#">แชร์</a>
                        </li>
                    </ul>
                </div>
                <div class="d-none d-lg-block">
                    <select class="change-menu">
                        <option class="">TH</option>
                        <option class="">EN</option>
                    </select>
                    <a class="menu" href="#">แชร์</a>
                </div>
            </nav>
        </div>
    </div>
</section>