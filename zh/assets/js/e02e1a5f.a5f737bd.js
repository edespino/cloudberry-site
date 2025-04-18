"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7655],{17025:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(85893),n=t(11151);const r={title:"gpfdist"},o="gpfdist",d={id:"sys-utilities/gpfdist",title:"gpfdist",description:"Serves data files to or writes data files out from Apache Cloudberry segments.",source:"@site/docs/sys-utilities/gpfdist.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpfdist",permalink:"/zh/docs/sys-utilities/gpfdist",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpfdist.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1744282709,formattedLastUpdatedAt:"2025\u5e744\u670810\u65e5",frontMatter:{title:"gpfdist"},sidebar:"docsbars",previous:{title:"gpexpand",permalink:"/zh/docs/sys-utilities/gpexpand"},next:{title:"gpinitstandby",permalink:"/zh/docs/sys-utilities/gpinitstandby"}},l={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"gpfdist",children:"gpfdist"}),"\n",(0,i.jsx)(s.p,{children:"Serves data files to or writes data files out from Apache Cloudberry segments."}),"\n",(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpfdist [-d <directory>] [-p <http_port>] [-P <last_http_port>] [-l <log_file>]\n   [-t <timeout>] [-S] [-w <time>] [-v | -V] [-s] [-m <max_length>]\n   [--ssl <certificate_path> [--sslclean <wait_time>] ]\n   [--compress] [--multi_thread <num_threads>]\n   [-c <config.yml>]\n\ngpfdist -? | --help \n\ngpfdist --version\n"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"gpfdist"})," is Apache Cloudberry parallel file distribution program. It is used by readable external tables and ",(0,i.jsx)(s.code,{children:"gpload"})," to serve external table files to all Apache Cloudberry segments in parallel. It is used by writable external tables to accept output streams from Apache Cloudberry segments in parallel and write them out to a file."]}),"\n",(0,i.jsxs)(s.p,{children:["In order for ",(0,i.jsx)(s.code,{children:"gpfdist"})," to be used by an external table, the ",(0,i.jsx)(s.code,{children:"LOCATION"})," clause of the external table definition must specify the external table data using the ",(0,i.jsx)(s.code,{children:"gpfdist://"})," protocol (see the Apache Cloudberry command ",(0,i.jsx)(s.code,{children:"CREATE EXTERNAL TABLE"}),")."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," If the ",(0,i.jsx)(s.code,{children:"--ssl"})," option is specified to enable SSL security, create the external table with the ",(0,i.jsx)(s.code,{children:"gpfdists://"})," protocol."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The benefit of using ",(0,i.jsx)(s.code,{children:"gpfdist"})," is that you are guaranteed maximum parallelism while reading from or writing to external tables, thereby offering the best performance as well as easier administration of external tables."]}),"\n",(0,i.jsxs)(s.p,{children:["For readable external tables, ",(0,i.jsx)(s.code,{children:"gpfdist"})," parses and serves data files evenly to all the segment instances in the Apache Cloudberry system when users ",(0,i.jsx)(s.code,{children:"SELECT"})," from the external table. For writable external tables, ",(0,i.jsx)(s.code,{children:"gpfdist"})," accepts parallel output streams from the segments when users ",(0,i.jsx)(s.code,{children:"INSERT"})," into the external table, and writes to an output file."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," When ",(0,i.jsx)(s.code,{children:"gpfdist"})," reads data and encounters a data formatting error, the error message includes a row number indicating the location of the formatting error. ",(0,i.jsx)(s.code,{children:"gpfdist"})," attempts to capture the row that contains the error. However, ",(0,i.jsx)(s.code,{children:"gpfdist"})," might not capture the exact row for some formatting errors."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For readable external tables, if load files are compressed using ",(0,i.jsx)(s.code,{children:"gzip"})," or ",(0,i.jsx)(s.code,{children:"bzip2"})," (have a ",(0,i.jsx)(s.code,{children:".gz"})," or ",(0,i.jsx)(s.code,{children:".bz2"})," file extension), ",(0,i.jsx)(s.code,{children:"gpfdist"})," uncompresses the data while loading the data (on the fly). For writable external tables, ",(0,i.jsx)(s.code,{children:"gpfdist"})," compresses the data using ",(0,i.jsx)(s.code,{children:"gzip"})," if the target file has a ",(0,i.jsx)(s.code,{children:".gz"})," extension."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," Compression is not supported for readable and writeable external tables when the ",(0,i.jsx)(s.code,{children:"gpfdist"})," utility runs on Windows platforms."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["When reading or writing data with the ",(0,i.jsx)(s.code,{children:"gpfdist"})," or ",(0,i.jsx)(s.code,{children:"gpfdists"})," protocol, Apache Cloudberry includes ",(0,i.jsx)(s.code,{children:"X-GP-PROTO"})," in the HTTP request header to indicate that the request is from Apache Cloudberry. The utility rejects HTTP requests that do not include ",(0,i.jsx)(s.code,{children:"X-GP-PROTO"})," in the request header."]}),"\n",(0,i.jsxs)(s.p,{children:["Most likely, you will want to run ",(0,i.jsx)(s.code,{children:"gpfdist"})," on your ETL machines rather than the hosts where Apache Cloudberry is installed. To install ",(0,i.jsx)(s.code,{children:"gpfdist"})," on another host, simply copy the utility over to that host and add ",(0,i.jsx)(s.code,{children:"gpfdist"})," to your ",(0,i.jsx)(s.code,{children:"$PATH"}),"."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," When using IPv6, always enclose the numeric IP address in brackets."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-d directory"})})}),"\n",(0,i.jsxs)(s.p,{children:["The directory from which ",(0,i.jsx)(s.code,{children:"gpfdist"})," will serve files for readable external tables or create output files for writable external tables. If not specified, defaults to the current directory."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-l log_file"})})}),"\n",(0,i.jsx)(s.p,{children:"The fully qualified path and log file name where standard output messages are to be logged."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-p http_port"})})}),"\n",(0,i.jsxs)(s.p,{children:["The HTTP port on which ",(0,i.jsx)(s.code,{children:"gpfdist"})," will serve files. Defaults to 8080."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-P last_http_port"})})}),"\n",(0,i.jsxs)(s.p,{children:["The last port number in a range of HTTP port numbers (http_port to last_http_port, inclusive) on which ",(0,i.jsx)(s.code,{children:"gpfdist"})," will attempt to serve files. ",(0,i.jsx)(s.code,{children:"gpfdist"})," serves the files on the first port number in the range to which it successfully binds."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-t timeout"})})}),"\n",(0,i.jsxs)(s.p,{children:["Sets the time allowed for Apache Cloudberry to establish a connection to a ",(0,i.jsx)(s.code,{children:"gpfdist"})," process. Default is 5 seconds. Allowed values are 2 to 7200 seconds (2 hours). May need to be increased on systems with a lot of network traffic."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-m max_length"})})}),"\n",(0,i.jsxs)(s.p,{children:["Sets the maximum allowed data row length in bytes. Default is 32768. Should be used when user data includes very wide rows (or when ",(0,i.jsx)(s.code,{children:"line too long"})," error message occurs). Should not be used otherwise as it increases resource allocation. Valid range is 32K to 256MB. (The upper limit is 1MB on Windows systems.)"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"})," Memory issues might occur if you specify a large maximum row length and run a large number of ",(0,i.jsx)(s.code,{children:"gpfdist"})," concurrent connections. For example, setting this value to the maximum of 256MB with 96 concurrent ",(0,i.jsx)(s.code,{children:"gpfdist"})," processes requires approximately 24GB of memory (",(0,i.jsx)(s.code,{children:"(96 + 1) x 246MB"}),")."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-s"})})}),"\n",(0,i.jsxs)(s.p,{children:["Enables simplified logging. When this option is specified, only messages with ",(0,i.jsx)(s.code,{children:"WARN"})," level and higher are written to the ",(0,i.jsx)(s.code,{children:"gpfdist"})," log file. ",(0,i.jsx)(s.code,{children:"INFO"})," level messages are not written to the log file. If this option is not specified, all ",(0,i.jsx)(s.code,{children:"gpfdist"})," messages are written to the log file."]}),"\n",(0,i.jsx)(s.p,{children:"You can specify this option to reduce the information written to the log file."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-S (use O_SYNC)"})})}),"\n",(0,i.jsxs)(s.p,{children:["Opens the file for synchronous I/O with the ",(0,i.jsx)(s.code,{children:"O_SYNC"})," flag. Any writes to the resulting file descriptor block ",(0,i.jsx)(s.code,{children:"gpfdist"})," until the data is physically written to the underlying hardware."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-w time"})})}),"\n",(0,i.jsx)(s.p,{children:"Sets the number of seconds that Apache Cloudberry delays before closing a target file such as a named pipe. The default value is 0, no delay. The maximum value is 7200 seconds (2 hours)."}),"\n",(0,i.jsx)(s.p,{children:"For a Apache Cloudberry with multiple segments, there might be a delay between segments when writing data from different segments to the file. You can specify a time to wait before Apache Cloudberry closes the file to ensure all the data is written to the file."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--ssl certificate_path"})})}),"\n",(0,i.jsxs)(s.p,{children:["Adds SSL encryption to data transferred with ",(0,i.jsx)(s.code,{children:"gpfdist"}),". After running ",(0,i.jsx)(s.code,{children:"gpfdist"})," with the ",(0,i.jsx)(s.code,{children:"--ssl certificate_path"})," option, the only way to load data from this file server is with the ",(0,i.jsx)(s.code,{children:"gpfdist://"})," protocol. For information on the ",(0,i.jsx)(s.code,{children:"gpfdist://"})," protocol, see ",(0,i.jsx)(s.a,{href:"../data-loading/load-data-using-gpfdist.md",children:"Loading and Unloading Data"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"The location specified in certificate_path must contain the following files:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The server certificate file, ",(0,i.jsx)(s.code,{children:"server.crt"})]}),"\n",(0,i.jsxs)(s.li,{children:["The server private key file, ",(0,i.jsx)(s.code,{children:"server.key"})]}),"\n",(0,i.jsxs)(s.li,{children:["The trusted certificate authorities, ",(0,i.jsx)(s.code,{children:"root.crt"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The root directory (",(0,i.jsx)(s.code,{children:"/"}),") cannot be specified as certificate_path."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--sslclean wait_time"})})}),"\n",(0,i.jsxs)(s.p,{children:["When the utility is run with the ",(0,i.jsx)(s.code,{children:"--ssl"})," option, sets the number of seconds that the utility delays before closing an SSL session and cleaning up the SSL resources after it completes writing data to or from a Apache Cloudberry segment. The default value is 0, no delay. The maximum value is 500 seconds. If the delay is increased, the transfer speed decreases."]}),"\n",(0,i.jsxs)(s.p,{children:["In some cases, this error might occur when copying large amounts of data: ",(0,i.jsx)(s.code,{children:"gpfdist server closed connection"}),". To avoid the error, you can add a delay, for example ",(0,i.jsx)(s.code,{children:"--sslclean 5"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--compress"})})}),"\n",(0,i.jsxs)(s.p,{children:["Enable compression during data transfer. When specified, ",(0,i.jsx)(s.code,{children:"gpfdist"})," utilizes the Zstandard (",(0,i.jsx)(s.code,{children:"zstd"}),") compression algorithm."]}),"\n",(0,i.jsx)(s.p,{children:"This option is not available on Windows platforms."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--multi_threads num_threads"})})}),"\n",(0,i.jsxs)(s.p,{children:["Sets the maximum number of threads that ",(0,i.jsx)(s.code,{children:"gpfdist"})," uses during data transfer, parallelizing the operation. When specified, ",(0,i.jsx)(s.code,{children:"gpfdist"})," automatically compresses the data (also parallelized) before transferring."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"gpfdist"})," supports a maximum of 256 threads."]}),"\n",(0,i.jsx)(s.p,{children:"This option is not available on Windows platforms."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-c config.yaml"})})}),"\n",(0,i.jsxs)(s.p,{children:["Specifies rules that ",(0,i.jsx)(s.code,{children:"gpfdist"})," uses to select a transform to apply when loading or extracting data. The ",(0,i.jsx)(s.code,{children:"gpfdist"})," configuration file is a YAML 1.1 document."]}),"\n",(0,i.jsx)(s.p,{children:"This option is not available on Windows platforms."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-v (verbose)"})})}),"\n",(0,i.jsx)(s.p,{children:"Verbose mode shows progress and status messages."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-V (very verbose)"})})}),"\n",(0,i.jsx)(s.p,{children:"Verbose mode shows all output messages generated by this utility."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"-? (help)"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the online help."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"--version"})})}),"\n",(0,i.jsx)(s.p,{children:"Displays the version of this utility."}),"\n",(0,i.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(s.p,{children:["The server configuration parameter ",(0,i.jsx)(s.code,{children:"verify_gpfdists_cert"})," controls whether SSL certificate authentication is enabled when Apache Cloudberry communicates with the ",(0,i.jsx)(s.code,{children:"gpfdist"})," utility to either read data from or write data to an external data source. You can set the parameter value to ",(0,i.jsx)(s.code,{children:"false"})," to deactivate authentication when testing the communication between the Apache Cloudberry external table and the ",(0,i.jsx)(s.code,{children:"gpfdist"})," utility that is serving the external data. If the value is ",(0,i.jsx)(s.code,{children:"false"}),", these SSL exceptions are ignored:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The self-signed SSL certificate that is used by ",(0,i.jsx)(s.code,{children:"gpfdist"})," is not trusted by Apache Cloudberry."]}),"\n",(0,i.jsxs)(s.li,{children:["The host name contained in the SSL certificate does not match the host name that is running ",(0,i.jsx)(s.code,{children:"gpfdist"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Caution"})," Deactivating SSL certificate authentication exposes a security risk by not validating the ",(0,i.jsx)(s.code,{children:"gpfdists"})," SSL certificate."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You can set the server configuration parameter ",(0,i.jsx)(s.code,{children:"gpfdist_retry_timeout"})," to control the time that Apache Cloudberry waits before returning an error when a ",(0,i.jsx)(s.code,{children:"gpfdist"})," server does not respond while Apache Cloudberry is attempting to write data to ",(0,i.jsx)(s.code,{children:"gpfdist"}),". The default is 300 seconds (5 minutes)."]}),"\n",(0,i.jsxs)(s.p,{children:["If the ",(0,i.jsx)(s.code,{children:"gpfdist"})," utility hangs with no read or write activity occurring, you can generate a core dump the next time a hang occurs to help debug the issue. Set the environment variable ",(0,i.jsx)(s.code,{children:"GPFDIST_WATCHDOG_TIMER"})," to the number of seconds of no activity to wait before ",(0,i.jsx)(s.code,{children:"gpfdist"})," is forced to exit. When the environment variable is set and ",(0,i.jsx)(s.code,{children:"gpfdist"})," hangs, the utility is stopped after the specified number of seconds, creates a core dump, and sends relevant information to the log file."]}),"\n",(0,i.jsxs)(s.p,{children:["This example sets the environment variable on a Linux system so that ",(0,i.jsx)(s.code,{children:"gpfdist"})," exits after 300 seconds (5 minutes) of no activity."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"export GPFDIST_WATCHDOG_TIMER=300\n"})}),"\n",(0,i.jsxs)(s.p,{children:["When you enable compression, ",(0,i.jsx)(s.code,{children:"gpfdist"})," transmits a larger amount of data while maintaining low network usage. Note that compression can be time-intensive, and may potentially reduce transmission speeds. When you utilize multi-threaded execution, the overall time required for compression may decrease, which facilitates faster data transmission while maintaining low network occupancy and high speed."]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(s.p,{children:["To serve files from a specified directory using port 8081 (and start ",(0,i.jsx)(s.code,{children:"gpfdist"})," in the background):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpfdist -d /var/load_files -p 8081 &\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To start ",(0,i.jsx)(s.code,{children:"gpfdist"})," in the background and redirect output and errors to a log file:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpfdist -d /var/load_files -p 8081 -l /home/gpadmin/log &\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To enable multi-threaded data transfer (with implicit compression) using four threads, start ",(0,i.jsx)(s.code,{children:"gpfdist"})," as follows:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"gpfdist -d /var/load_files -p 8081 --multi_thread 4\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To stop ",(0,i.jsx)(s.code,{children:"gpfdist"})," when it is running in the background:"]}),"\n",(0,i.jsx)(s.p,{children:"--First find its process id:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"ps ax | grep gpfdist\n"})}),"\n",(0,i.jsx)(s.p,{children:"--Then stop the process, for example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"kill 3456\n"})}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/zh/docs/sys-utilities/gpload",children:"gpload"}),", ",(0,i.jsx)(s.code,{children:"CREATE EXTERNAL TABLE"})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>o});var i=t(67294);const n={},r=i.createContext(n);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);