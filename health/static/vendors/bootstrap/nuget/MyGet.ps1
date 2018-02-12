<<<<<<< HEAD
$nuget = $env:NuGet

#parse the version number out of package.json
$bsversion = ((Get-Content $env:SourcesPath\package.json) -join "`n" | ConvertFrom-Json).version

#create packages
& $nuget pack "nuget\bootstrap.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
=======
$nuget = $env:NuGet

#parse the version number out of package.json
$bsversion = ((Get-Content $env:SourcesPath\package.json) -join "`n" | ConvertFrom-Json).version

#create packages
& $nuget pack "nuget\bootstrap.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion
>>>>>>> 5f91f3411245b1d3d2d998dbedeb8154265a24fb
& $nuget pack "nuget\bootstrap.less.nuspec" -Verbosity detailed -NonInteractive -NoPackageAnalysis -BasePath $env:SourcesPath -Version $bsversion