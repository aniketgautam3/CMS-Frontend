<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.84.0">
    <title>CMS Template</title>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.umd.min.js"
        integrity="sha512-GCiwmzA0bNGVsp1otzTJ4LWQT2jjGJENLGyLlerlzckNI30moi2EQT0AfRI7fLYYYDKR+7hnuh35r3y1uJzugw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>

</head>

<body>

    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <div class="col-md-3 col-lg-2">
            <a class="navbar-brand d-none d-md-block me-0 px-3">CMS</a>
        </div>
        <a class="navbar-brand px-3 d-md-none" style="padding-left:10% !important;">CMS</a>
        <button class="btn btn-link position-absolute d-md-none col-md-3 col-lg-2 collapsed me-0 px-3" type="button"
            data-bs-toggle="collapse" data-bs-target=".js-sidebar" aria-expanded="false" aria-label="Toggle navigation"
            style="box-shadow: none;">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="dropdown">
            <a href="#" class="link-light text-decoration-none dropdown-toggle px-2" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="https://avatars.githubusercontent.com/u/123241206?s=400&v=4" class="rounded-circle" width="32"
                    height="32">
            </a>
            <div class="dropdown-menu text-small dropdown-menu-right" style="right:0; left: auto;">
                <li><a class="dropdown-item" href="/canteen/profile/1">Profile</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </div>
        </div>
    </header>

    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse js-sidebar">
                <div class="position-sticky pt-3" style="top:60px">
                    <ul id="sidebar_navigation-list" class="nav nav-pills flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="/canteen/dashboard">
                                Dashboard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/canteen/orders">
                                Order Management
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/canteen/menu-management">
                                Menu Management
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/canteen/inventory-management">
                                Inventory Management
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main id="main-content" class="col-md-9 ms-sm-auto col-lg-10 px-3 py-2"
                style="min-height: calc(100vh - 40px);">
                Loading...
            </main>

            <script>
                // Load the main contents
                const loadMainContent = async () => {
                    const urlPath = window.location.pathname;
                    let page = urlPath.match(/^\/(.+)\/?\??/)[1];
                    const mainContentElem = document.getElementById('main-content');
                    do {
                        console.log(page);
                        const fileToLoad = "/" + page + ".html";
                        const res = await fetch(fileToLoad);
                        const responseHTML = await res.text();
                        if (!res.ok || new DOMParser().parseFromString(responseHTML, 'text/html').title.includes("Template")) {
                            page = page.split("/");
                            page.pop();
                            page = page.join("/");
                            continue;
                        }
                        $(mainContentElem).html(responseHTML);
                        const navLinks = document.querySelectorAll('#sidebar_navigation-list .nav-link');
                        navLinks.forEach(link => {
                            if ((link.getAttribute('href') || "").includes(page)) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });

                        break;
                    } while (page != "" && page != "/");
                };

                loadMainContent();
            </script>
        </div>
    </div>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</body>

</html>