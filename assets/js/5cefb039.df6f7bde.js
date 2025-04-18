"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5927],{12137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(85893),o=t(11151);const a={title:"Geospatial Analytics"},i="Geospatial Analytics",r={id:"advanced-analytics/postgis",title:"Geospatial Analytics",description:"PostGIS extends the capabilities of the PostgreSQL by adding support for storing, indexing, and querying geospatial data. Apache Cloudberry supports PostGIS for geospatial analytics.",source:"@site/docs/advanced-analytics/postgis.md",sourceDirName:"advanced-analytics",slug:"/advanced-analytics/postgis",permalink:"/docs/advanced-analytics/postgis",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/advanced-analytics/postgis.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1744282709,formattedLastUpdatedAt:"Apr 10, 2025",frontMatter:{title:"Geospatial Analytics"},sidebar:"docsbars",previous:{title:"Choose the Table Storage Model",permalink:"/docs/table-storage-models"},next:{title:"Directory Table",permalink:"/docs/advanced-analytics/directory-tables"}},l={},d=[{value:"Compile PostGIS for Apache Cloudberry",id:"compile-postgis-for-apache-cloudberry",level:2},{value:"Use PostGIS in Apache Cloudberry",id:"use-postgis-in-apache-cloudberry",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"geospatial-analytics",children:"Geospatial Analytics"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://postgis.net/",children:"PostGIS"})," extends the capabilities of the PostgreSQL by adding support for storing, indexing, and querying geospatial data. Apache Cloudberry supports PostGIS for geospatial analytics."]}),"\n",(0,s.jsx)(n.p,{children:"This document introduces how to compile and build PostGIS for your Apache Cloudberry cluster."}),"\n",(0,s.jsxs)(n.p,{children:["You can access the PostGIS for Apache Cloudberry project repo at ",(0,s.jsx)(n.a,{href:"https://github.com/cloudberry-contrib/postgis",children:(0,s.jsx)(n.code,{children:"cloudberry-contrib/postgis"})}),". The PostGIS code in this repo is dedicated to Apache Cloudberry. The compilation and building method introduced in this document is based on the code of this repo."]}),"\n",(0,s.jsx)(n.h2,{id:"compile-postgis-for-apache-cloudberry",children:"Compile PostGIS for Apache Cloudberry"}),"\n",(0,s.jsx)(n.p,{children:"Before installing PostGIS for Apache Cloudberry, install the required dependencies and compile several components. This process is currently supported only on CentOS, with plans to support Rocky Linux in the future."}),"\n",(0,s.jsxs)(n.p,{children:["Before you get started, ensure that the Apache Cloudberry is correctly installed on your machine. If it is not installed, see the ",(0,s.jsx)(n.a,{href:"https://cloudberry.apache.org/docs/",children:"documentation"})," for installation instructions."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install the pre-requested dependencies."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum install -y libtool proj-devel boost-devel gmp-devel mpfr-devel pcre-devel protobuf protobuf-c protobuf-devel protobuf-c-devel && \\\nyum install -y gcc make subversion gcc-c++ sqlite-devel libxml2-devel swig expat-devel libcurl-devel python36-devel json-c\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build the components (GDAL, CGAL, SFCGAL, and GEOS). Make sure you are building them by ",(0,s.jsx)(n.code,{children:"root"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build GDAL."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://gdal.org/index.html",children:"GDAL"})," is a translator library for raster and vector geospatial data formats. Follow the commands to install it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://download.osgeo.org/gdal/2.2.1/gdal-2.2.1.tar.gz --no-check-certificate\ntar xf gdal-2.2.1.tar.gz\ncd gdal-2.2.1/\n./configure --prefix=/usr/local/gdal-2.2.1\nmake && make install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build CGAL."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.cgal.org/",children:"CGAL"})," provides easy access to efficient and reliable geometric algorithms in the form of a C++ library. Follow the commands to install it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/CGAL/cgal/archive/releases/CGAL-4.13.tar.gz\ntar xf CGAL-4.13.tar.gz\ncd cgal-releases-CGAL-4.13/\nmkdir build && cd build\ncmake ..\nmake && make install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build SFCGAL."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/Oslandia/SFCGAL",children:"SFCGAL"})," is a C++ wrapper library around CGAL to support ISO 19107:2013 and OGC Simple Features Access 1.2 for 3D operations. Follow the commands to install it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/Oslandia/SFCGAL/archive/v1.3.6.tar.gz\ntar xf v1.3.6.tar.gz\ncd SFCGAL-1.3.6/\nmkdir build && cd build\ncmake -DCMAKE_INSTALL_PREFIX=/usr/local/sfcgal-1.3.6 ..\nmake && make install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build GEOS."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://libgeos.org/",children:"GEOS"})," is a C/C++ library for computational geometry with a focus on algorithms used in geographic information systems (GIS) software. Follow the commands to install it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://download.osgeo.org/geos/geos-3.7.0.tar.bz2 --no-check-certificate\ntar xf geos-3.7.0.tar.bz2\ncd geos-3.7.0/\n./configure --prefix=/usr/local/geos-3.7.0/\nmake && make install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Update ",(0,s.jsx)(n.code,{children:"/etc/ld.so.conf"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["After installing the above components, update ",(0,s.jsx)(n.code,{children:"/etc/ld.so.conf"})," to configure the dynamic loader to search for their directories:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat << EOF >> /etc/ld.so.conf\n/usr/lib/\n/usr/lib64/\n/usr/local/sfcgal-1.3.6/lib64/\n/usr/local/gdal-2.2.1/lib/\n/usr/local/geos-3.7.0/lib/\nEOF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then run the command ",(0,s.jsx)(n.code,{children:"ldconfig"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build and install PostGIS."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the ",(0,s.jsx)(n.code,{children:"cloudberry-contrib/postgis"})," repo to your ",(0,s.jsx)(n.code,{children:"/home/gpadmin"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/cloudberry-contrib/postgis.git /home/gpadmin/postgis\nchown -R gpadmin:gpadmin /home/gpadmin/postgis\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Compile PostGIS."}),"\n",(0,s.jsx)(n.p,{children:"Before starting the compilation process, run the following commands to make sure the environment variables are set ready:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source /usr/local/cloudberry/greenplum_path.sh\nsource /home/gpadmin/cloudberry/gpAux/gpdemo/gpdemo-env.sh\nscl enable devtoolset-10 bash\nsource /opt/rh/devtoolset-10/enable\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then continue:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cd /home/gpadmin/postgis/postgis/build/postgis-2.5.4/\n./autogen.sh\n./configure --prefix="${GPHOME}" --with-pgconfig="${GPHOME}"/bin/pg_config --with-raster --without-topology --with-gdalconfig=/usr/local/gdal-2.2.1/bin/gdal-config --with-sfcgal=/usr/local/sfcgal-1.3.6/bin/sfcgal-config --with-geosconfig=/usr/local/geos-3.7.0/bin/geos-config\nmake && make install\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-postgis-in-apache-cloudberry",children:"Use PostGIS in Apache Cloudberry"}),"\n",(0,s.jsx)(n.p,{children:"After you have compiled and built PostGIS and the supporting extensions successfully on your Apache Cloudberry cluster and have started the demo cluster, you can run the following commands to enable PostGIS and the supporting extensions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"$ psql -p 7000 postgres\n\npostgres=# CREATE EXTENSION postgis;     -- Enables PostGIS and raster\npostgres=# CREATE EXTENSION fuzzystrmatch;     -- Required for installing Tiger Geocoder\npostgres=# CREATE EXTENSION postgis_tiger_geocoder;     -- Enables Tiger Geocoder\npostgres=# CREATE EXTENSION address_standardizer;     -- Enables address_standardizer\npostgres=# CREATE EXTENSION address_standardizer_data_us;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following example uses PostGIS to create non-OpenGIS tables in the database, and insert and query geometric objects."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Creates a table named geom_test.\nCREATE TABLE geom_test ( gid int4, geom geometry, \n  name varchar(25) );\n\n-- Inserts a row into the table. The gid is 1, the geometry field represents a three-dimensional polygon object (a 3D square) using WKT format, and the name is '3D Square'.\nINSERT INTO geom_test ( gid, geom, name )\n  VALUES ( 1, 'POLYGON((0 0 0,0 5 0,5 5 0,5 0 0,0 0 0))', '3D Square');\n  \n-- Inserts the second row. The gid is 2, the geometry is a three-dimensional line string, and the name is '3D Line'.\nINSERT INTO geom_test ( gid, geom, name ) \n  VALUES ( 2, 'LINESTRING(1 1 1,5 5 5,7 7 5)', '3D Line' );\n  \n-- Inserts the third row. The gid is 3, the geometry is a two-dimensional multi-point object, and the name is '2D Aggregate Point'.\nINSERT INTO geom_test ( gid, geom, name )\n  VALUES ( 3, 'MULTIPOINT(3 4,8 9)', '2D Aggregate Point' );\n\n-- Uses ST_GeomFromEWKT to build a three-dimensional lines tring object from EWKT, then use Box3D to get the three-dimensional bounding box of that object. Use the && operator to query all rows in the geom_test table whose geom field intersects with the bounding box.\nSELECT * from geom_test WHERE geom &&\n  Box3D(ST_GeomFromEWKT('LINESTRING(2 2 0, 3 3 0)'));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following example uses PostGIS to create a table with geo-referenced data, inserts geo-coded point data, and outputs point data in standard text format."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Creates a table named geotest.\nCREATE TABLE geotest (id INT4, name VARCHAR(32) );\n\n-- Adds a geometry column named geopoint to the geotest table, defined as a POINT type with 2 dimensions, and specifies its Spatial Reference System (SRID) as 4326 (representing the WGS84 geographic coordinate system).\nSELECT AddGeometryColumn('geotest','geopoint', 4326,'POINT',2);\n\n-- Inserts the first row. The id is 1, the name is 'Olympia', and geopoint is a point object build from WKT text using ST_GeometryFromText with coordinates (-122.90, 46.97) and SRID 4326.\nINSERT INTO geotest (id, name, geopoint)\n  VALUES (1, 'Olympia', ST_GeometryFromText('POINT(-122.90 46.97)', 4326));\n  \n-- Inserts the second row. The id is 2, the name is 'Renton', with point coordinates (-122.22, 47.50) and the same SRID of 4326.\nINSERT INTO geotest (id, name, geopoint)\n  VALUES (2, 'Renton', ST_GeometryFromText('POINT(-122.22 47.50)', 4326));\n\n-- Selects the name and geopoint fields from the geotest table, but converts the geopoint field to standard text (WKT) format using the ST_AsText function.\nSELECT name,ST_AsText(geopoint) FROM geotest;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following example uses the spatial indexing feature."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Creates table.\nCREATE TABLE spatial_data (\n  id SERIAL PRIMARY KEY,\n  geom geometry\n);\n\n-- Inserts data.\nINSERT INTO spatial_data (geom) VALUES \n(ST_GeomFromText('POINT(0 0)')),\n(ST_GeomFromText('POINT(1 1)')),\n(ST_GeomFromText('POLYGON((0 0, 4 0, 4 4, 0 4, 0 0))'));\n\n-- Creates spatial index.\nCREATE INDEX spatial_data_gist_idx\n  ON spatial_data\n  USING GIST (geom);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more usages, you can follow the ",(0,s.jsx)(n.a,{href:"https://postgis.net/documentation/manual/",children:"PostGIS manual"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);