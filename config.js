module.exports = {
    "secrets": {
        "RENOVATE_TOKEN": String(process.env.RENOVATE_TOKEN)
    },
    "autodiscover": true,
    "gitAuthor": "bitfist <me@renelebherz.com>",
    "autodiscoverFilter": ["bitfist/*"],
    "extends": [
        "config:recommended",
    ],
    "packageRules": [
        {
            "matchDatasources": [
                "npm"
            ],
            "minimumReleaseAge": "3 days",
            "prCreation": "not-pending"
        },
        {
            "matchDatasources": [
                "maven",
                "gradle"
            ],
            "matchUpdateTypes": ["major", "minor", "patch"],
            "automerge": true,
        },
        {
            "matchDepNames": [
                "io.spring.dependency-management"
            ],
            "changelogUrl": "https://github.com/spring-gradle-plugins/dependency-management-plugin"
        },
        {
            "matchDatasources": [
                "maven"
            ],
            "registryUrls": [
                "https://repo1.maven.org/maven2/",
                "https://plugins.gradle.org/m2/",
                "https://maven.pkg.github.com/bitfist/gradle-github-support",
                "https://maven.pkg.github.com/bitfist/jcef-gradle-plugin",
                "https://maven.pkg.github.com/bitfist/jcef-spring-boot-starter",
                "https://maven.pkg.github.com/bitfist/markdown-editor-fx",
                "https://maven.pkg.github.com/bitfist/os-conditions-spring-boot-starter",
            ],
            "matchPackageNames": [
                "/io.github.bitfist.*/"
            ]
        },
        {
            "groupName": "kotlin-spring",
            "matchDepNames": [
                "org.jetbrains.kotlin.jvm",
                "org.jetbrains.kotlin.plugin.spring"
            ]
        },
        {
            "groupName": "mapstruct",
            "matchPackageNames": [
                "org.mapstruct:mapstruct:{/,}**"
            ]
        },
        {
            "groupName": "SpringDoc",
            "matchPackageNames": [
                "org.springdoc:{/,}**"
            ]
        },
        {
            "groupName": "Apache Avro",
            "matchPackageNames": [
                "org.apache.avro:{/,}**"
            ]
        },
        {
            "matchDatasources": [
                "maven"
            ],
            "groupName": "OpenRewrite",
            "matchPackageNames": [
                "org.openrewrite{/,}**"
            ]
        }
    ],
    "platformAutomerge": true,
    "assigneesFromCodeOwners": true,
    "labels": [
        "renovate",
        "dependencies",
        "automated"
    ],
    "hostRules": [
        {
            "hostType": "maven",
            "matchHost": "https://maven.pkg.github.com",
            "token": String(process.env.RENOVATE_TOKEN)
        }
    ]
};
